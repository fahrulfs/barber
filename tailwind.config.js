/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
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
        "hero": "url('/public/assets/hero.jpg')",
        "heroMobile": "url('/public/assets/hero-mobile.png')",
        "heroCta": "url('/public/assets/hero1.jpg')"

      },
       colors: {
         'main': '#dec7a6',
         'second':'#9d9570',
            
          // Configure your color palette here
      },
  
    },
  },
  plugins: [
      require('preline/plugin'),
  ],
}

