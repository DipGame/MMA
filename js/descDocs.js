// Скрипт отвечает за выбор ОПИСАНИЕ И ХАРАКТЕРИСТИКИ/НЕОБХОДИМЫЕ ДОКУМЕНТЫ
if (document.querySelector('.description')) {
    const description = document.querySelector('.description');
    const descriptionSwiperText = description.querySelectorAll('.description__text');
    const descriptionTextContainer = description.querySelector('.description__text-container');
    const descriptionText = descriptionTextContainer.querySelectorAll('.description__content-container');

    let num = 1;
    let numText = 1;

    function removeClassTextSlide(text) {
        text.forEach(el => {
            if (el.classList.contains('description_active')) {
                el.classList.remove('description_active');
            }
        });
    }
    function addClassTextSlide(text) {
        text.classList.add('description_active');
    }

    function handleVisionText(id) {
        descriptionText.forEach(el => {
            el.classList.add('invisibility');
            if (el.id === id) {
                el.classList.remove('invisibility'); 
            }
        })
    }

    descriptionSwiperText.forEach(element => {
        element.id = num;
        num++;
        element.addEventListener('click', () => {
            removeClassTextSlide(descriptionSwiperText);
            handleVisionText(element.id);
            if (!element.classList.contains('description_active')) {
                addClassTextSlide(element);
            }
        })
    });

    descriptionText.forEach(element => {
        element.id = numText;
        numText++;
    });
}