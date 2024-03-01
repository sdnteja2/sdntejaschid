// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxthq/studio',
  ],
  googleFonts: {
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true,
    // download: true,
    // outputDir: 'assets',
    // stylePath: 'fonts.css',
    // fontsDir: 'fonts',
    // overwriting: true,
    // fontsPath: 'fonts',
    families: {
      'Bricolage Grotesque': {
        wght: '200..800',
      },
      'Space Grotesk': {
        wght: '300..700',
      },
    },
  },
})
