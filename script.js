//MENU SHOW
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId); 

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

//REMOVE MENU 
const navLink = document.querySelectorAll('.nav__link');
const navMenu = document.getElementById('nav-menu');

    //difference funct et const ()
function linkAction(){
    navMenu.classList.remove('show')
}

//difference between '' and ""
navLink.forEach(n => n.addEventListener('click', linkAction))

//SCROLL SECTIONS ACTIVE LINK 
const sections = document.querySelectorAll('selection[id]');
window.addEventListener('scroll',scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight= current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = curent.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('remove')

        }
    })
}

//CHANGE COLOR HEADER