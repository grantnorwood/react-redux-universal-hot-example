require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'EP University ~ For Students',
    defaultTitle: 'EP University ~ For Students',
    description: 'The new v2 Student UI built using React.js.',
    head: {
      titleTemplate: '%s ~ EP University',
      link: [
        { rel: 'apple-touch-icon', sizes: '57x57', href: '/themes/ep/favicons/apple-touch-icon-57x57.png?v=20160614' },
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/themes/ep/favicons/apple-touch-icon-60x60.png?v=20160614' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/themes/ep/favicons/apple-touch-icon-72x72.png?v=20160614' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/themes/ep/favicons/apple-touch-icon-76x76.png?v=20160614' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/themes/ep/favicons/apple-touch-icon-114x114.png?v=20160614' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/themes/ep/favicons/apple-touch-icon-120x120.png?v=20160614' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/themes/ep/favicons/apple-touch-icon-144x144.png?v=20160614' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/themes/ep/favicons/apple-touch-icon-152x152.png?v=20160614' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/themes/ep/favicons/apple-touch-icon-180x180.png?v=20160614' },
        { rel: 'icon', type: 'image/png', href: '/themes/ep/favicons/favicon-32x32.png?v=20160614', sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: '/themes/ep/favicons/favicon-194x194.png?v=20160614', sizes: '194x194' },
        { rel: 'icon', type: 'image/png', href: '/themes/ep/favicons/favicon-96x96.png?v=20160614', sizes: '96x96' },
        { rel: 'icon', type: 'image/png', href: '/themes/ep/favicons/android-chrome-192x192.png?v=20160614', sizes: '192x192' },
        { rel: 'icon', type: 'image/png', href: '/themes/ep/favicons/favicon-16x16.png?v=20160614', sizes: '16x16' },
        { rel: 'manifest', href: '/themes/ep/favicons/manifest.json?v=20160614' },
        { rel: 'mask-icon', href: '/themes/ep/favicons/safari-pinned-tab.svg?v=20160614" color="#05a4e1' },
        { rel: 'shortcut icon', href: '/themes/ep/favicons/favicon.ico?v=20160614' }
      ],
      meta: [
        { name: 'description', content: 'The new v2 Student UI built using React.js.' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: 'EP University' },
        { property: 'og:image', content: '/themes/ep/img/ep-brand-mark-400.png' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: 'EP University ~ For Students' },
        { property: 'og:description', content: 'The new v2 Student UI built using React.js.' },
        { property: 'og:card', content: 'summary' },
        { property: 'og:site', content: 'http://www.educationpartners.com/' },
        { property: 'og:creator', content: '@EP_FASolutions' },
        { property: 'og:image:width', content: '400' },
        { property: 'og:image:height', content: '400' },

        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@EP_FASolutions' },
        { name: 'twitter:title', content: 'EP University ~ For Students' },
        { name: 'twitter:description', content: 'The new v2 Student UI built using React.js.' },
        { name: 'twitter:image', content: '/themes/ep/img/ep-brand-mark-400.png' },

        { name: 'apple-mobile-web-app-title', content: 'EP University ~ For Students' },
        { name: 'application-name', content: 'EP University ~ For Students' },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'msapplication-TileImage', content: '/themes/ep/favicons/mstile-144x144.png?v=20160614' },
        { name: 'msapplication-config', content: '/themes/ep/favicons/browserconfig.xml?v=20160614' },
        { name: 'theme-color', content: '#ffffff' }
      ]
    }
  }
}, environment);
