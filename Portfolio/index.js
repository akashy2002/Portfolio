let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.addEventListener('click', () => {
    console.log("clciked")
    menuIcon.classList.toggle('change')
    navbar.classList.toggle('active')
})

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    // remove----toggle item when you scroll 

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.screenY > 100)

    navbar.classList.remove('active')
};


// scroll reveal ---

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' })
ScrollReveal().reveal('.home-img, .services-content, .portfolio-box, .contact form', { origin: 'bottom' })
ScrollReveal().reveal('.about-img', { origin: 'left' })
ScrollReveal().reveal('.about-content', { origin: 'right' })



// typed----js---
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Full-Stack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})




