// initialize swiper.js
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    height: 500,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true, 
    },

    // breakpoints
    breakpoints: {
        576.98: {
            slidesPerView:3,
        }
    },
})

// initialize AOS
AOS.init({
    once: true,
    anchorPlacement: 'center-botom',
    duration: 1000
});

// card hover effect
document.querySelector(".card-1").addEventListener('mouseover', function(){
    document.querySelector('.card_img-1').src="./assets/imgs/XMLID 345 (1).png"
})
document.querySelector(".card-1").addEventListener('mouseout', function(){
    document.querySelector('.card_img-1').src="./assets/imgs/svg/XMLID 345.svg"
})
document.querySelector(".card-2").addEventListener('mouseover', function(){
    document.querySelector('.card_img-2').src="./assets/imgs/_Group_.png"
})
document.querySelector(".card-2").addEventListener('mouseout', function(){
    document.querySelector('.card_img-2').src="./assets/imgs/svg/_Group_.svg"
})
document.querySelector(".card-3").addEventListener('mouseover', function(){
    document.querySelector('.card_img-3').src="./assets/imgs/website coding and gear.png"
})
document.querySelector(".card-3").addEventListener('mouseout', function(){
    document.querySelector('.card_img-3').src="./assets/imgs/svg/website coding and gear.svg"
})

// GSAP

// nav animation
var navButton = document.querySelector('.navbar-toggler');
var navOpen = document.querySelector('.nav-open')
var closeBtn = document.querySelector('.close-btn');
var navLinks = document.querySelectorAll('.mobile-nav');

var tl4 = gsap.timeline({
    paused: true
});
gsap.set('.nav-open', {
    transformOrigin: "90% 3%"
})
tl4.to('.nav-open', {
    duration: .7,
    scale: 1,
    opacity: 1
}).to('.navbar, #hero', {
    duration: .2,
    opacity: 0
}, '-= 1').to('.close-btn', {
    duration: .3,
    opacity: 1,
    x: -5
});

navButton.addEventListener('click', function (){
    tl4.play();
});
closeBtn.addEventListener('click', function(){
    tl4.reverse()
});
navLinks.forEach(function(link){
    link.addEventListener('click', function(){
        tl4.reverse()
})
})


// scroll trigger animations
gsap.registerPlugin(TextPlugin, ScrollTrigger);
var tl5 = gsap.timeline();
var tl = gsap.timeline();
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.anim6'
    }
});
var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.anim8'
    }
});

tl5.to('.layer', {
    delay: .2,
    y: "-100vh",
    ease: 'circ.out',
    stagger: .2
}).to('.overlay', {
    display: 'none'
})

tl.from('.anim1', {
        delay: 1,
        opacity: 0,
        duration: 1,
        y:-50,
    })
    .from('.anim3', {
        duration: 1,
        opacity: 0
    })
    .to('.anim4', {
        duration: 1.5,
        text: "Josh Kennedy"
    }, '-=1')
    .from('.anim5', {
        opacity:0,
        duration: 1,
        y: -50
    })
    .from('.anim2', {
        duration: .5,
        opacity:0,
    }, '-=.5');


tl2.from('.anim6', {
        x: 500,
        opacity:0,
        duration: 2
    }).from('.anim7', {
        x: -500,
        opacity: 0,
        duration: 2
    }, '-= 2')
    .to('.design', {
        x: 0, 
        duration: 1,
        ease: "circ.out"
    }).from('.value', {
        opacity: 0,
        duration: .5
    })
    .to('.web', {
        duration: 1.5,
        x: 0,
        ease: "circ.out"
    }, '-=1').from('.num',{
        opacity: 0,
        duration: .5
    });

tl3.from('.anim8', {
    opacity: 0,
    y: 80,
    stagger: .7,
    duration: 1
});

