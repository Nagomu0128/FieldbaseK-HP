/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://fieldbase-k.jp',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*', '/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
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
  transform: async (config, path) => {
    const priorityMap = {
      '/': 1.0,
      '/vehicle': 0.9,
      '/pricing': 0.9,
      '/calendar': 0.8,
      '/contact': 0.8,
      '/flow': 0.7,
      '/faq': 0.7,
    };

    const changefreqMap = {
      '/': 'weekly',
      '/calendar': 'daily',
      '/vehicle': 'monthly',
      '/pricing': 'monthly',
      '/flow': 'monthly',
      '/faq': 'monthly',
      '/contact': 'monthly',
    };

    return {
      loc: path,
      changefreq: changefreqMap[path] ?? config.changefreq,
      priority: priorityMap[path] ?? config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
