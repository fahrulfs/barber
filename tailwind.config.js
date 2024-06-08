/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'selector',
  content: [
    "./public/**/*.{html,js}",
    'node_modules/preline/dist/*.js',

  ],

  theme: {
    extend: {
      fontFamily: {
        'mainFont': ["Barlow", "sans-serif"],
      },
      backgroundImage: {
        "hero": "url('/public/assets/hero.svg')",
        "heroCta": "url('/public/assets/hero1.svg')"

      },
       colors: {
         'main': '#dec7a6',
         'second':'#9d9570',
            
          // Configure your color palette here
        }
    },
  },
  plugins: [
      require('preline/plugin'),
  ],
}

