const menuToggle = document.querySelector('#toggle-btn');
const navigation = document.querySelector('.nav-menu');
const listItem = document.querySelectorAll('.list-item');
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');

    if (menuToggle.innerHTML === `<i class="fa-solid fa-xmark"></i>`) {
        menuToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    } else {
        menuToggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    }
}

$('ul li').on('click', function () {
    $(this).toggleClass('show');
    $(this).siblings().removeClass('show');
});

$('.search-toggle').click(function () {

    $('.ui-search-bar input').toggle(200);
    $(".navigation").toggleClass("test");
});

var swiper = new Swiper(".mySwiperBanner", {
    slidesPerView: 1,
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
        delay: 3000,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
    },
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
            slidesPerView: 2,
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


$(function () {

    $('#datetimepicker2').datetimepicker({
        format: 'DD-MM-YYYY'
    });

});


$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.header-inner').addClass('sticky');

    } else {
        $('.header-inner').removeClass('sticky');

    }
});