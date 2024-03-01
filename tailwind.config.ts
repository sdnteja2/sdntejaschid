import type { Config } from 'tailwindcss'

import { fontFamily } from 'tailwindcss/defaultTheme'

import plugin from 'tailwindcss/plugin'

export default <Partial<Config>> {

  theme: {
    extend: {
      colors: {
        merah: {
          DEFAULT: '#F22727',
          50: '#FCD4D4',
          100: '#FBC1C1',
          200: '#F99A9A',
          300: '#F77474',
          400: '#F44D4D',
          500: '#F22727',
          600: '#D40D0D',
          700: '#9F0A0A',
          800: '#6A0606',
          900: '#350303',
          950: '#1B0202',
        },
      },
      fontFamily: {
        title: ['Bricolage Grotesque', 'Bricolage Grotesque fallback', ...fontFamily.sans],
        body: ['Space Grotesk', 'Space Grotesk fallback', ...fontFamily.sans],
      },
      typography: ({ theme }: { theme: any }) => ({
        merah: {
          css: {
            '--tw-prose-body': theme('colors.merah[800]'),
            '--tw-prose-headings': theme('colors.merah[900]'),
            '--tw-prose-lead': theme('colors.merah[700]'),
            '--tw-prose-links': theme('colors.merah[900]'),
            '--tw-prose-bold': theme('colors.merah[900]'),
            '--tw-prose-counters': theme('colors.merah[600]'),
            '--tw-prose-bullets': theme('colors.merah[400]'),
            '--tw-prose-hr': theme('colors.merah[300]'),
            '--tw-prose-quotes': theme('colors.merah[900]'),
            '--tw-prose-quote-borders': theme('colors.merah[300]'),
            '--tw-prose-captions': theme('colors.merah[700]'),
            '--tw-prose-code': theme('colors.merah[900]'),
            '--tw-prose-pre-code': theme('colors.merah[100]'),
            '--tw-prose-pre-bg': theme('colors.merah[900]'),
            '--tw-prose-th-borders': theme('colors.merah[300]'),
            '--tw-prose-td-borders': theme('colors.merah[200]'),
            '--tw-prose-invert-body': theme('colors.merah[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.merah[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.merah[400]'),
            '--tw-prose-invert-bullets': theme('colors.merah[600]'),
            '--tw-prose-invert-hr': theme('colors.merah[700]'),
            '--tw-prose-invert-quotes': theme('colors.merah[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.merah[700]'),
            '--tw-prose-invert-captions': theme('colors.merah[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.merah[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.merah[600]'),
            '--tw-prose-invert-td-borders': theme('colors.merah[700]'),
          },
        },
      }),
    },
  },
  // corePlugins: {
  //   aspectRatio: false,
  // },
  // plugins: [
  //   plugin(({ addComponents, theme }: { addComponents: any, theme: any }) => {
  //     addComponents({
  //       '.title': {},
  //     })
  //   }),
  //   require('@tailwindcss/typography'),
  //   require('@tailwindcss/aspect-ratio'),
  // ],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './content/**/*.md',
  ],
}
