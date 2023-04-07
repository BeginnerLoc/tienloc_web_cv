// Menu
var menuButton = document.querySelector('.navbar__icons')
var menu = document.querySelector('.navbar__links')

menuButton.addEventListener('click', ()=>{
    menu.classList.toggle('navbar__open')
    menuButton.classList.toggle('open')
})
