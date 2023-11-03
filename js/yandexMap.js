// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
    // Создание карты.
    // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/map-docpage/
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчнию: «широта, долгота».
        center: [60.948674, 76.537145],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 15,
        // Элементы управления
        // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/controls/standard-docpage/
        controls: [

            //    'rulerControl',  Линейка
            //    'routeButtonControl', // Панель маршрутизации
            //    'trafficControl',  Пробки
            //    'typeSelector',  Переключатель слоев карты
            //    'fullscreenControl',  Полноэкранный режим

            // Поисковая строка
            // new ymaps.control.SearchControl({
            //     options: {
            //         // вид - поисковая строка
            //         size: 'large',
            //         // Включим возможность искать не только топонимы, но и организации.
            //         provider: 'yandex#search'
            //     }
            // })

        ]
    });

    // Добавление метки
    // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/
    var myPlacemark = new ymaps.Placemark([60.948674, 76.537145], null, {
        iconLayout: 'default#image',
        iconImageHref: "../images/location.png",
        iconImageSize: [50, 50],
        iconImageOffset: [-15, -44]
    });

    // После того как метка была создана, добавляем её на карту.
    myMap.geoObjects.add(myPlacemark);

    var zoomControl = new ymaps.control.ZoomControl({ options: { position: { right: 5, top: 100 } } });

    myMap.controls.add(zoomControl);
    var geolocationControl = new ymaps.control.GeolocationControl({ options: { position: { right: 5, top: 320 } } });

    myMap.controls.add(geolocationControl);
}