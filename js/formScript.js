// Начало Скрипта открытие оверлея формы
if (document.querySelector('.overlayForm')) {
    const overlayForm = document.querySelector('.overlayForm');
    const popupClose = overlayForm.querySelector('.popup-rec-online__close-btn');
    const orderCloseBtn = overlayForm.querySelector('.order__close-btn');

    function overlayFormOpen() {
        overlayForm.classList.add('overlay_open');
    }

    function overlayFormClose() {
        overlayForm.classList.remove('overlay_open');
    }

    popupClose.addEventListener('click', () => {
        overlayFormClose();
    })

    orderCloseBtn.addEventListener('click', () => {
        overlayFormClose();
    })

    window.addEventListener('click', (e) => {
        if (e.target.id === 'openOverlayForm') {
            overlayFormOpen();
        }  if (e.target.classList.contains('overlay')) {
            overlayFormClose();
        }
    })
}
// Закрытие Скрипта открытие оверлея формы

// Начало Скрипта маски телефона
window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll('#inputPhone'), function (input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = ""
        }
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    });
});
// Конец Скрипта маски телефона

if (document.querySelector('.order')) {
    const order = document.querySelectorAll('.order');
    order.forEach(element => {
        const form = element.querySelector('.order__form');
        const orderInputContainer = element.querySelector('.order__input-container');
        const subBtn = element.querySelector('.baner__btn');
        const inputName = element.querySelector('#inputName');
        const inputPhone = element.querySelector('#inputPhone');
        const inputEmail = element.querySelector('#inputEmail');
        const inputRadio = element.querySelectorAll('.input__radio');
        const inputText = element.querySelector('textarea');
        const inputPolitic = element.querySelector('#politic');
        const inputPoliticPopup = element.querySelector('#politic-popup');
        const orderContainerGood = element.querySelector('.order__container-good');
        const orderTitle = element.querySelector('.order__title');
        const orderFirstText = element.querySelector('.order__first-text');

        function appendRemoveBtn() { // перемещение кнопки в зависимости от ширины экрана
            if (subBtn.classList.contains('desc-order-btn')) {
                if (window.screen.width < 957) {
                    let subBtnCopy = subBtn.cloneNode(true);
                    subBtn.remove();
                    form.appendChild(subBtnCopy);
                }

                window.addEventListener('resize', function () {
                    let subBtnCopy = form.querySelector('.baner__btn');
                    if (window.screen.width < 957) {
                        if (subBtnCopy) {
                            subBtnCopy.remove();
                            form.appendChild(subBtnCopy);
                        }
                    } else {
                        if (form.querySelector('.baner__btn')) {
                            subBtnCopy.remove();
                            orderInputContainer.appendChild(subBtnCopy);
                        }
                    }
                });
            }
        }

        appendRemoveBtn();

        function addErrorInput(input) {
            let errorText = input.parentElement.querySelector('p');
            if (!input.classList.contains('input__err')) {
                input.classList.add('input__err');
            }
            if (errorText.classList.contains('invisibility')) {
                errorText.classList.remove('invisibility');
            }
        }

        function removeErrorInput(input) {
            let errorText = input.parentElement.querySelector('p');
            if (input.classList.contains('input__err')) {
                input.classList.remove('input__err');
            }
            if (!errorText.classList.contains('invisibility')) {
                errorText.classList.add('invisibility');
            }
        }

        function checkValid(input) {
            addEvenInput(input);
            if (input.name === 'name') {
                if (input.value.length < 2) {
                    addErrorInput(input);
                    return false;
                } else {
                    removeErrorInput(input);
                    return true;
                }
            }
            if (input.name === 'phone') {
                if (input.value.length < 17) {
                    addErrorInput(input);
                    return false;
                } else {
                    removeErrorInput(input);
                    return true;
                }
            }
            if (input.name === 'email') {
                let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                if (!re.test(input.value)) {
                    addErrorInput(input);
                    return false;
                } else {
                    removeErrorInput(input);
                    return true;
                }
            }
        }

        function addEvenInput(input) {
            input.addEventListener('input', () => {
                if (input.name === 'name') {
                    if (input.value.length < 2) {
                        addErrorInput(input);
                        return false;
                    } else {
                        removeErrorInput(input);
                        return true;
                    }
                }
                if (input.name === 'phone') {
                    if (input.value.length < 17) {
                        addErrorInput(input);
                        return false;
                    } else {
                        removeErrorInput(input);
                        return true;
                    }
                }
                if (input.name === 'email') {
                    let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                    if (!re.test(input.value)) {
                        addErrorInput(input);
                        return false;
                    } else {
                        removeErrorInput(input);
                        return true;
                    }
                }
            })
        }

        function allCheckValid() {
            checkValid(inputName);
            checkValid(inputPhone);
            checkValid(inputEmail);
            if (checkValid(inputName) && checkValid(inputPhone) && checkValid(inputEmail) && checkPolitic()) {
                return true;
            } else {
                return false;
            }
        }

        inputRadio.forEach(radio => {
            radio.addEventListener('click', () => {
                inputRadio.forEach(radio => {
                    if (radio.checked) {
                        radio.checked = false;
                    }
                })
                radio.checked = true;
            })
        });

        function checkPolitic() {
            if (inputPolitic || inputPoliticPopup) {
                return true;
            } else {
                return false;
            }
        }

        function handleGoodSub() {
            orderTitle.classList.add('invisibility');
            form.classList.add('invisibility');
            if (element.querySelector('.order__first-text')) {
                orderFirstText.classList.add('invisibility');
            }
            orderContainerGood.classList.remove('invisibility');
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            checkPolitic()
            allCheckValid();
            if (allCheckValid()) {
                console.log(inputName.value);
                console.log(inputPhone.value);
                console.log(inputEmail.value);
                console.log(inputText.value);
                inputRadio.forEach(radio => {
                    if (radio.checked) {
                        let arrLabel = radio.parentElement.querySelectorAll('label');
                        arrLabel.forEach(el => {
                            if (el.control.id === radio.id) {
                                console.log(el.innerText);
                                // formData.append('messenger', el.innerText);
                            }
                        })
                    }
                })
                handleGoodSub();
                // let formData = new FormData();
                // formData.append('name', inputName.value);
                // formData.append('phone', inputPhone.value);
                // formData.append('email', inputEmail.value);
                // formData.append('comment', inputText.value);
            }
        })
    });
}