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