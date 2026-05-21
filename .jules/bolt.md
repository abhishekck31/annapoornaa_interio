## 2026-05-21 - Replaced unoptimized img tags with next/image
**Learning:** Next.js projects should heavily leverage `next/image` to prevent unoptimized images which cause LCP and bandwidth issues.
**Action:** When finding Next.js code with plain `img` tags, update them to `<Image>` tags. If relative sized, use `fill` and ensure parent is `relative`.
