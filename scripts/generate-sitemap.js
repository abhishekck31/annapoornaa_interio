const fs = require('fs');
const { globby } = require('globby');

(async () => {
  const pages = await globby([
    'pages/**/*{.js,.mdx}',
    '!pages/_*.js',
    '!pages/api'
  ]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map(page => {
        const path = page
          .replace('pages', '')
          .replace('.js', '')
          .replace('.mdx', '');
        return `
        <url>
          <loc>https://yourdomain.com${path}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>`;
      }).join('')}
    </urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
})();
