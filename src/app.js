//define global variables
const menuIcon = document.querySelector('.navigation-menu i');
const navMenu = document.querySelector('.navigation-menu .links-list');
const navLinks = document.querySelectorAll('.links-list li a')


//add function when click on the icon nav menu will appear
menuIcon.addEventListener('click',showmenu)
// function when click on the link hide the menu
navLinks.onclick = hideMenu
function showmenu(){
    navMenu.style.display =("block")
}
menuIcon.addEventListener('dblclick',hideMenu)
function hideMenu(){
    navMenu.style.display =("none")

}
