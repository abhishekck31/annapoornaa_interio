// Prints every registry page (slug, label, kind) as JSON, for generate-nearby-pages.py.
const path = require("path")
const root = path.join(__dirname, "..")
const jiti = require("jiti")(__filename, { alias: { "@": root } })
const { areaPages } = jiti(path.join(root, "content/area-pages/index.ts"))
const { serviceAreaLinks, publishedNewPageLinks } = jiti(path.join(root, "lib/seo/service-area-links.ts"))
const out = [
  ...areaPages.map((p) => ({ slug: p.slug, label: p.breadcrumbLabel, kind: p.kind })),
  ...serviceAreaLinks.map((l) => ({ slug: l.slug, label: l.label, kind: "legacy" })),
  ...publishedNewPageLinks.map((l) => ({ slug: l.slug, label: l.label, kind: "published" })),
]
process.stdout.write(JSON.stringify(out, null, 1))
