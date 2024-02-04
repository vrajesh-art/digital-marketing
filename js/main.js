// this is header scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add('header-scrolled');
    }
    else {
        nav.classList.remove("header-scrolled");
    }
}

// below we are dealing with the owl carousel
// we are using jquery here
$(document).ready(function () {
    $(".client-slider-section").owlCarousel({
        items: 4,
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
});

// jab bhi hum  togler pe click karte hai tab woh show waala class navbar mein add karta hsi isliye hum jab kisi bhi nav-link pe click karte hai tab woh wapas se band nhi hoota hai

let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (a) {
    a.addEventListener('click', function () {
        navCollapse.classList.remove("show");
    })
});

