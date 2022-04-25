var swiper = new Swiper(".mySwiperBanner", {
    slidesPerView: 1,
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,

    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});


$("#tel").mask("(999) 999-9999");