var swiper = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
    navgation: {
        nextE1: ".swipper-button-next",
        prevE1: ".swipper-button-prev"
    }
})