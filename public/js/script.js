const nav = document.getElementById('navbar')
const toTop=document.getElementById('top')
const navFixed = nav.offsetTop
window.onscroll = function () {
    if( window.scrollY > navFixed){
        nav.classList.add('nav-fixed')
        toTop.classList.add('block')
        toTop.classList.remove('hidden')
    }
    else {
  nav.classList.remove('nav-fixed')
        toTop.classList.add('hidden')
        toTop.classList.remove('block')
    }
  
}
const hamburger = document.getElementById('hamburger')
const navMenu = document.getElementById('nav-menu')

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active')
  navMenu.classList.toggle('hidden')
});


// darkmode
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');

function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}


if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  setTheme('dark');
} else {
  setTheme('light');
}

sunIcon.addEventListener('click', () => {
  localStorage.theme = 'dark';
  setTheme('dark');
});

moonIcon.addEventListener('click', () => {
  localStorage.theme = 'light';
  setTheme('light'); 
});