export default defineAppConfig({
  ui: {
    primary: 'merah',
    gray: 'slate',
    icons: {
      dynamic: true,
    },
    container: {
      base: 'mx-auto',
      padding: 'px-4 sm:px-6 py-10  lg:px-8',
      constrained: 'max-w-6xl',
    },
    tabs: {
      wrapper: 'relative space-y-2',
      container: 'relative w-full',
      base: 'focus:outline-none',
      list: {

        marker: {
          wrapper: 'absolute text-white top-[4px] left-[4px] duration-200 ease-out focus:outline-none',
          base: 'w-full h-full',
          background: 'bg-merah dark:bg-merah',
          rounded: 'rounded-md',
          shadow: 'shadow-sm',
        },
        tab: {
          base: 'relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out',
          background: '',
          active: 'text-white dark:text-white',
          inactive: 'text-gray-500 dark:text-gray-400',
          height: 'h-8',
          padding: 'px-3',
          size: 'text-sm',
          font: 'font-medium',
          rounded: 'rounded-md',
          shadow: '',
        },
      },
    },

  },
})
