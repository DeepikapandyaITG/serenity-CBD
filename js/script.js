console.log(window.innerWidth);
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});
var swiper = new Swiper(".swiper-component", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});