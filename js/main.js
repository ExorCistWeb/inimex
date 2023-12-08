var swiper = new Swiper(".reviewsSwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    breakpoints: {

        320: {
            slidesPerView: 'auto',
            centeredSlides: true,
        },
        768: {
            centeredSlides: false,
        },
        1080: {
            slidesPerView: 3,
        }
    }
});
var swiper = new Swiper(".workSwiper", {
    slidesPerView: 'auto',
    spaceBetween: 0,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {

        320: {
            centeredSlides: true,
        },
        768: {
            centeredSlides: false,
        },

    }
});
document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            header.classList.add("scroll");
        } else {
            header.classList.remove("scroll");
        }
    });
});