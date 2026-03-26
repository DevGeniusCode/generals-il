// scripts/generate-sitemap.js
import fs from 'fs';
import guidesData from '../src/data/guides.json' with { type: 'json' };

const BASE_URL = 'https://generals-il.vercel.app';

function generateSitemap() {
    // 1. Define all static pages
    const staticPages = [
        '/',
        '/guides',
        '/resources',
        '/social-media'
    ];

    // 2. Dynamically generate URLs for each guide
    const guidePages = guidesData.map(guide => `/guides/${guide.guideName}`);

    // 3. Combine all URLs
    const allUrls = [...staticPages, ...guidePages];

    // 4. Build the XML structure
    const sitemapContent = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls.map(url => `
    <url>
        <loc>${BASE_URL}${url}</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>${url === '/' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>
    `.trim();

    // 5. Write the file to the public directory
    try {
        fs.writeFileSync('public/sitemap.xml', sitemapContent);
        console.log('✅ Sitemap generated successfully!');
    } catch (error) {
        console.error('❌ Error generating sitemap:', error);
    }
}

generateSitemap();