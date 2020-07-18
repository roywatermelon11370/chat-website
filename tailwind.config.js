module.exports = {
  purge: {
    enabled: true,
    mode: 'all',
    content: [
      './index.html',
      './settings.html',
      './register.html',
      './login.html',
      './main.html',
    ],

    options: {
      whitelist: ['bg-blue-500', 'transition', 'ease-out', 'duration-200', 'transform', '-translate-y-4', 'translate-y-0'],
    }
  },
  theme: {
    extend: {
      colors: {

      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
        '75vh': '75vh'
      }
    }
  },

  varients: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
}