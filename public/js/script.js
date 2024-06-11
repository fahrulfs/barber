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



window.sr = ScrollReveal({
  reset: true,
  duration: 1500,
  distance: '60px',
  origin:'bottom'
});

// TITTLE / SUB
sr.reveal('.textmain', {
  origin: 'top'
})
sr.reveal('.textinfo', {
  intervat: 100
})
// HERO SECTION

// ADRESS
sr.reveal('.address')
sr.reveal('.email')
sr.reveal('.phone')
sr.reveal('.hours')
// ADRESS

// about
sr.reveal('.about_left', {
  origin: 'left'
})
sr.reveal('.about_right', {
  origin:'right',
})
// about

// service
sr.reveal('.service_right', {
  origin: 'left',
  opacity:0.9
})
sr.reveal('.service_left', {
  origin: 'right',
  opacity:0.9
})
// service
sr.reveal('.choose_icon1', {
  origin: 'left',
  opacity:0.9
})
sr.reveal('.choose_icon2', {
  opacity:0.9
})
sr.reveal('.choose_icon3', {
  origin: 'right',
  opacity:0.9
})

// Gallery
sr.reveal('.gallery_1', {
  origin: 'left',
  opacity:0.9
})
sr.reveal('.gallery_2', {
  origin: 'right',
  opacity:0.9
})
sr.reveal('.gallery_3', {
  origin: 'left',
  opacity:0.9
})
sr.reveal('.gallery_4', {
  origin: 'right',
  opacity:0.9
})
sr.reveal('.gallery_5', {
  origin: 'left',
  opacity:0.9
})
sr.reveal('.gallery_6', {
  origin: 'right',
  opacity:0.9
})

// team
sr.reveal('.team_1', {
  origin: 'left',
  opacity:0.9
})
sr.reveal('.team_2', {
  origin: 'right',
  opacity:0.9
})
sr.reveal('.team_3', {
  origin: 'left',
  opacity:0.9
})
sr.reveal('.team_4', {
  origin: 'right',
  opacity:0.9
})
sr.reveal('.team_5', {
  origin: 'left',
  opacity:0.9
})
sr.reveal('.team_6', {
  origin: 'right',
  opacity:0.9
})