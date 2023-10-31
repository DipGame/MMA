// Скрипт меню слева 
if (document.querySelector('.header')) {
    const header = document.querySelector('.header');
    const headerHiddenBtnToggle = header.querySelector('.header__hidden-menu-btn');
    const headerHiddenMobileContainer = header.querySelector('.header__mobile');
    const headerTopContainer = header.querySelector('.header__top-container');
    const headerHiddenMenuBtn = header.querySelector('.header__hidden-menu-btn');
    const headerImgLogoElips = header.querySelector('.header__img-logo-elips');
    const headerImgLogoTitle = header.querySelector('.header__img-logo-title');
    const headerMobileImgLogo = header.querySelector('.header__mobile-img-logo');
    const headerList = header.querySelectorAll('#headerList');

    window.addEventListener('resize', function () {
        if (window.screen.width > 1179) {
            headerTopContainer.style.cssText = "background-color: none; border: none;";
        } else {
            headerTopContainer.style.cssText = "background-color: none; border-bottom: 1px solid #D1D5DB;";
        }
    });

    headerList.forEach(el => {
        const headerMobileSublist = el.querySelector('.header__mobile-sublist');
        const headerListLink = el.querySelector('#headerListLink');
        const headerArrow = el.querySelector('#headerArrow');
        el.addEventListener('click', () => {
            headerMobileSublist.classList.toggle('header__mobile-sublist_open');
            if (headerMobileSublist.classList.contains('header__mobile-sublist_open')) {
                headerListLink.style.cssText = "color: #FD4328;";
                headerArrow.src = 'images/arrow red.svg';
            } else {
                headerListLink.style.cssText = "color: #FFFFFF;";
                headerArrow.src = 'images/arrow.svg';
            }
        })
    });


    headerHiddenBtnToggle.addEventListener('click', () => {
        headerHiddenMobileContainer.classList.toggle('header__mobile_open');
        if (headerHiddenMobileContainer.classList.contains('header__mobile_open')) {

            headerHiddenMenuBtn.style.cssText = "background-image: url('images/menu.svg');";
            header.style.cssText = "background-color: #0D121C;";
            headerTopContainer.style.cssText = "background-color: #0D121C; border: none;";
            // headerImgLogoElips.classList.add('invisibility');
            // headerImgLogoTitle.classList.add('invisibility');
            // headerMobileImgLogo.classList.remove('invisibility');
        } else {
            headerHiddenMenuBtn.style.cssText = "background-image: url('images/Меню.svg');";
            header.style.cssText = "background-color: none;";
            headerTopContainer.style.cssText = "background-color: none; border-bottom: 1px solid #D1D5DB;";
            // headerImgLogoElips.classList.remove('invisibility');
            // headerImgLogoTitle.classList.remove('invisibility');
            // headerMobileImgLogo.classList.add('invisibility');
        }
    })
}
// Скрипт меню слева (КОНЕЦ)