if (document.querySelector('.header')) {
    const header = document.querySelector('.header');
    const headerHiddenBtnToggle = header.querySelector('.header__hidden-menu-btn');
    const headerHiddenMobileContainer = header.querySelector('.header__mobile');
    const headerTopContainer = header.querySelector('.header__top-container');
    const headerHiddenMenuBtn = header.querySelector('.header__hidden-menu-btn');
    const headerImgLogoElips = header.querySelector('.header__img-logo-elips');
    const headerImgLogoTitle = header.querySelector('.header__img-logo-title');
    const headerMobileImgLogo = header.querySelector('.header__mobile-img-logo');

    // if (window.screen.width > 599) {

    // }

    window.addEventListener('resize', function () {
        // console.log(window.screen.width);
    });

    headerHiddenBtnToggle.addEventListener('click', () => {
        headerHiddenMobileContainer.classList.toggle('header__mobile_open');
        if (headerHiddenMobileContainer.classList.contains('header__mobile_open')) {
            
            headerHiddenMenuBtn.style.cssText = "background-image: url('images/menu.svg');";
            headerTopContainer.style.cssText = "background-color: #0D121C; border: none;";
            headerImgLogoElips.classList.add('invisibility');
            headerImgLogoTitle.classList.add('invisibility');
            headerMobileImgLogo.classList.remove('invisibility');
        } else {
            headerHiddenMenuBtn.style.cssText = "background-image: url('images/Меню.svg');";
            headerTopContainer.style.cssText = "background-color: none; border-bottom: 1px solid #D1D5DB;";
            headerImgLogoElips.classList.remove('invisibility');
            headerImgLogoTitle.classList.remove('invisibility');
            headerMobileImgLogo.classList.add('invisibility');
        }
    })
}