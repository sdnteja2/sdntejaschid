// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxthq/studio',
    'nuxt-delay-hydration',
    '@nuxtjs/fontaine',
    '@nuxtjs/html-validator',
    '@nuxtjs/web-vitals',
    '@nuxtjs/seo',
  ],
  ui: {
    icons: ['ph'],
  },
  content: {
    documentDriven: true,

    navigation: {
      fields: ['navTitle'],
    },
    markdown: {
      anchorLinks: false,
    },
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini', 'c', 'cpp'],
    },
  },
  colorMode: {
    preference: 'dark',
  },
  site: {
    url: 'https://example.com',
    name: 'SDN Teja 2',
    description: 'Welcome to my awesome site!',
    defaultLocale: 'id', // not needed if you have @nuxtjs/i18n installed
  },
  delayHydration: {
    mode: 'mount',
  },
  googleFonts: {
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true,
    families: {
      'Bricolage Grotesque': {
        wght: '200..800',
      },
      'Space Grotesk': {
        wght: '300..700',
      },
    },
  },
  fontMetrics: {
    fonts: [
      {
        family: 'Bricolage Grotesque',
        fallbacks: ['Bricolage Grotesque'],
        fallbackName: 'Bricolage Grotesque',
        src: 'fonts/Bricolage_Grotesque-200_800-1.woff2',
        root: 'assets',
      },
      {
        family: 'Space Grotesk',
        fallbacks: ['Space Grotesk'],
        fallbackName: 'Space Grotesk',
        src: 'fonts/Space_Grotesk-300_700-5.woff2',
        root: 'assets',
      },
    ],
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})
