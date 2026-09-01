/**
 * One-off image optimiser for the oversized PNGs in `public/`.
 *
 *   node scripts/optimize-images.mjs
 *
 * For each file in CONVERT: resize to a max width of 1600px (never upscale),
 * re-encode as WebP at quality 80, write `<name>.webp` next to it, then remove
 * the original PNG. Files in DELETE are removed outright (unused hero art).
 *
 * Re-running is safe: a missing source is skipped with a notice.
 */

import { readFile, writeFile, stat, unlink, access } from "node:fs/promises"
import { join, dirname, basename, extname } from "node:path"
import { fileURLToPath } from "node:url"

import sharp from "sharp"

const PUBLIC_DIR = join(dirname(fileURLToPath(import.meta.url)), "..", "public")
const MAX_WIDTH = 1600
const QUALITY = 80

const CONVERT = [
  "Villain.png",
  "Dreamhome.png",
  "Villa.png",
  "Construction.png",
  "Officeinterior.png",
]

const DELETE = ["Hero1.png", "Hero2.png", "Hero3.png"]

const KB = (bytes) => `${(bytes / 1024).toFixed(0)} KB`
const exists = (p) =>
  access(p).then(
    () => true,
    () => false,
  )

async function convertOne(name) {
  const src = join(PUBLIC_DIR, name)
  if (!(await exists(src))) {
    console.log(`  skip   ${name} — not found`)
    return
  }

  const out = join(PUBLIC_DIR, `${basename(name, extname(name))}.webp`)
  const before = (await stat(src)).size

  const input = await readFile(src)
  const pipeline = sharp(input)
  const { width = 0 } = await pipeline.metadata()

  const buffer = await pipeline
    .resize({
      width: width > MAX_WIDTH ? MAX_WIDTH : undefined,
      withoutEnlargement: true,
    })
    .webp({ quality: QUALITY })
    .toBuffer()

  await writeFile(out, buffer)
  await unlink(src)

  const saved = (1 - buffer.length / before) * 100
  console.log(
    `  ok     ${name} → ${basename(out)}   ${KB(before)} → ${KB(buffer.length)}  (-${saved.toFixed(0)}%)`,
  )
}

async function deleteOne(name) {
  const target = join(PUBLIC_DIR, name)
  if (!(await exists(target))) {
    console.log(`  skip   ${name} — already gone`)
    return
  }
  await unlink(target)
  console.log(`  removed ${name}`)
}

console.log(`\nConverting ${CONVERT.length} images (max ${MAX_WIDTH}px, WebP q${QUALITY}):`)
for (const name of CONVERT) await convertOne(name)

console.log(`\nDeleting ${DELETE.length} unused hero PNGs:`)
for (const name of DELETE) await deleteOne(name)

console.log("\nDone. Remember to update any code that referenced the old .png paths.\n")
