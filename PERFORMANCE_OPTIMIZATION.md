# Performance Optimization Checklist

The following actions are critical to reduce page weight from ~23MB to under 4MB as requested.

## 🚨 Critical: Compress These Massive Images

The following images in your `public/` folder are causing massive load times. You must compress them using tools like [TinyPNG](https://tinypng.com), [Squoosh](https://squoosh.app), or convert them to WebP/AVIF format.

| Image File | Current Size | Action Required |
|------------|--------------|-----------------|
| `public/UP-Hero3.png` | **6.75 MB** | Compress to < 200KB (WebP) |
| `public/UP-Hero1.png` | **6.37 MB** | Compress to < 200KB (WebP) |
| `public/UP-Hero2.png` | **4.6 MB** | Compress to < 200KB (WebP) |
| `public/Villa.png` | **8.8 MB** | Resize & Compress |
| `public/Dreamhome.png`| **8.0 MB** | Resize & Compress |
| `public/Construction.png` | **6.2 MB** | Resize & Compress |
| `public/Homeinterior.png` | **4.9 MB** | Resize & Compress |
| `public/Officeinterior.png` | **5.5 MB** | Resize & Compress |

**Recommendation:**
1. Convert all PNGs to **WebP**.
2. Resize hero images to max width **1920px**.
3. Resize other portfolio images to max width **1200px**.

## ⚡ Code Optimizations Applied
- **Preload Removed**: We removed the forced preload of the 6.7MB `UP-Hero3.png` in `app/layout.tsx`.
- **Lazy Loading**: `ClientLogosSection` and `AboutSection` images are set to lazy load.
- **Dynamic Imports**: Heavy components (`Testimonials`, `Projects`, etc.) are already dynamically imported in `app/page.tsx`.

## 🤖 AI & SEO Optimizations Applied
- **LLM Optimization**: Added `public/llms.txt` for AI crawlers (GPT, Gemini, Perplexity).
- **Schema**: Injected massive `LocalBusiness` + `HomeAndConstructionBusiness` schema in `app/page.tsx`.
- **Entity SEO**: Rewrote Homepage Title, Meta Description, and Hero text to target "Interior Designers in Bangalore" and "Turnkey Construction".
- **AI Answers**: Rewrote `FAQSection` to provide direct, bulleted answers perfect for Google AI Overviews.
