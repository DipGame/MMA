let advantageSwiper = new Swiper(".advantageSwiper", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    loop: true,
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        528: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        964: {
            slidesPerView: 4,
            spaceBetween: 0
        }
    }
});
let prevSwiper = new Swiper(".prevSwiper", {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: '.prevFotos-swiper-button-next',
        prevEl: '.prevFotos-swiper-button-prev',
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        1428: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    }
});
let prodSwiper = new Swiper(".prodSwiper", {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: '.prodSwiper-swiper-button-next',
        prevEl: '.prodSwiper-swiper-button-prev',
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        764: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        1084: {
            slidesPerView: 3,
            spaceBetween: 0
        },
        1392: {
            slidesPerView: 4,
            spaceBetween: 0
        }
    }
});
let archiveSwiper = new Swiper(".archiveSwiper", {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: '.archiveSwiper-swiper-button-next',
        prevEl: '.archiveSwiper-swiper-button-prev',
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        764: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        1084: {
            slidesPerView: 3,
            spaceBetween: 0
        },
        1392: {
            slidesPerView: 3,
            spaceBetween: 0
        }
    }
});