// Начало скрипта попапа картинок
const overlayImg = document.querySelector('.overlayImg');
const popupImg = overlayImg.querySelector('.popupImg');
const popupSwiperWrapper = overlayImg.querySelector('.swiper-wrapper');
const popupClose = overlayImg.querySelector('.popup-rec-online__close-btn');

function overlayOpen() {
    overlayImg.classList.add('overlay_open');
}

function overlayClose() {
    overlayImg.classList.remove('overlay_open');
    popupSwiperWrapper.innerHTML = "";
}

window.addEventListener('click', (e) => {
    if (e.target.alt === 'kartinka') { // По Alt определеям картинки, которые нужно вывести в слайдер попапа
        let imageArr = e.target.offsetParent.offsetParent.childNodes;
        let arr = [];
        let num = 0;
        imageArr.forEach(el => {
            if (el.localName) {
                el.id = num;
                num++;
                let copy = el.cloneNode(true);
                arr.push(copy);
                popupSwiperWrapper.appendChild(copy);
                
            }
        })
        var numIdImg = e.target.offsetParent.id;
        let popupSwiper = new Swiper(".popupSwiper", {
            slidesPerView: 1,
            initialSlide: e.target.offsetParent.id,
            spaceBetween: 30,
            navigation: {
                nextEl: '.popup-swiper-button-next',
                prevEl: '.popup-swiper-button-prev',
            },
            loop: true,
        });
        overlayOpen();
        popupClose.addEventListener('click', () => {
            overlayClose();
            popupSwiper.destroy(true, true);
        })
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('overlay')) {
                overlayClose();
                popupSwiper.destroy(true, true);
            }
        })
    }
})
// Конец скрипта попапа картинок