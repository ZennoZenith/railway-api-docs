import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  cleanUrls: true,
  srcDir: '.',
  srcExclude: ['**/README.md', '**/TODO.md'],
  ignoreDeadLinks: true, // Defautl: false
  lastUpdated: true, // Defautl: false

  // scrollOffset:

  vite: {
    // Vite config options
  },
  vue: {
    // @vitejs/plugin-vue options
  },
  title: 'Railway API Docs',
  description: 'Railway API Documentation',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: 'https://railwayapi.site' },
      { text: 'Api Wrappers', link: '/wrappers' },
    ],

    sidebar: [
      { text: 'Introduction', link: '/introduction' },
      { text: 'Authentication', link: '/authentication' },
      { text: 'Error Codes', link: '/errorcodes' },
      { text: 'Response Codes', link: '/responsecodes' },
      { text: 'Versioning', link: '/versioning' },
      {
        text: 'Operations',
        link: 'operations',
        items: [
          { text: 'GET /trains', link: '/operations/train-list' },
          { text: 'GET /trains/{trainNumber}', link: '/operations/train-info' },
          {
            text: 'GET /schedules/{trainNumber}',
            link: '/operations/schedule',
          },
          { text: 'GET /stations', link: '/operations/station-list' },
          {
            text: 'GET /stations/{stationCode}',
            link: '/operations/station-info',
          },
          {
            text: 'GET /trainsBtwStations',
            link: '/operations/trains-between-stations',
          },
          { text: 'Misc. routes', link: '/operations/misc' },
        ],
      },
      {
        text: 'Api Wrappers',
        'link': '/wrappers',
        items: [
          { text: 'NodeJS', link: '/wrappers/nodejs' },
        ],
      },
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/ZennoZenith/railway-api-docs',
      },
      {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/m-bakhtiyar-ali/',
      },
    ],
    editLink: {
      pattern:
        'https://github.com/ZennoZenith/railway-api-docs/edit/main/docs/:path',
    },
  },
})

export const Extra = {
  'basePath': 'api.railwayapi.site',
} as const
