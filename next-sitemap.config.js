/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://fieldbase-k.jp',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
    ],
    additionalSitemaps: [
      'https://fieldbase-k.jp/sitemap.xml',
    ],
  },
  exclude: [],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // カスタムプライオリティ設定
    let priority = 0.7;
    if (path === '/') priority = 1.0;
    if (path === '/vehicle' || path === '/pricing') priority = 0.9;
    if (path === '/calendar' || path === '/contact') priority = 0.8;

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priority,
      lastmod: new Date().toISOString(),
    };
  },
}
