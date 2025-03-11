/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav__menu'), 
      navToggle = document.getElementById('nav__toggle'),
      navclose = document.getElementById('nav__close')


/*  MENU SHOW  */      
/*validate if constant exists*/ 
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show__menu')
    })
}  

/*  MENU HIDDEN  */
/*validate if constant exists*/
if(navclose){
    navclose.addEventListener('click', () =>{
        navMenu.classList.remove('show__menu')
    })
}




/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav__menu')

    //click the nav link and remove the show menu class
    navMenu.classList.remove('show__menu')
}

navLink.forEach(n => n.addEventListener('click' , linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    //scroll >> 50 viewport height => add scroll-header class to the header tag
    if(this.scrollY >= 50 ) header.classList.add('scroll_header');
    else header.classList.remove('scroll_header')
}

window.addEventListener('scroll', scrollHeader)

/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular_container", {
    loop: true,
    spaceBetween: 24,
    slidesPreView: 'auto',
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },

    breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1024: {
          spaceBetween: 48,
        },
      },
  });

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixer = mixitup('.featured_content', {
    selectors: {
        target: '.featured_card'
    },

    animation:{
        duration: 300
    }
});

/* Link active featured */ 
const linkFeatured = document.querySelectorAll('.featured__item')

function activeFeatured(){
    linkFeatured.forEach(l=> l.classList.remove('active_featured'))
    this.classList.add('active_featured')
}

linkFeatured.forEach(l=> l.addEventListener('click', activeFeatured))


/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    //scroll>>350 viewport height = > add the showscroll class to the a tag with
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); 
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    section.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.add('active-link')
        }

        else{
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,

    reset: true
})

sr.reveal(`.home_title, .popular_container, .features_img`)
sr.reveal(`.home_subtitle`, {delay:500})
sr.reveal(`.home_elec`, {delay:600})
sr.reveal(`.home_img`, {delay:800})
sr.reveal(`.home_carData`, {delay:900, interval: 100, origin: 'bottom'})
sr.reveal(`.home_button`, {delay:1000, origin: 'bottom'})
sr.reveal(`.about_group, .offer_data`, { origin: 'left'})
sr.reveal(`.about_data, offer_img`, {origin: 'right'})
sr.reveal(`.features_map`, {delay:600, origin: 'bottom'})
sr.reveal(`.features__card`, {interval: 300})
sr.reveal(`.featured_card, .logo_content, .footer_content`, {interval: 100})




