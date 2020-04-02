// Заполнение формы

document.querySelector('#city').addEventListener('input', function () {
    let a = document.querySelector('#city').value;
    document.querySelector('.location-text-city').innerHTML = a;
})
document.querySelector('#clear-x').addEventListener('click', function (e) {
    e.preventDefault();
    let a = document.querySelector('#city').value = "";
    document.querySelector('.location-text-city').innerHTML = a;
})

document.querySelector('#output').addEventListener('input', function () {
    let b = document.querySelector('#output').value;
    document.querySelector('.location-text-street').innerHTML = b;
})
document.querySelector('#clear-x2').addEventListener('click', function (e) {
    e.preventDefault();
    let b = document.querySelector('#output').value = "";
    document.querySelector('.location-text-street').innerHTML = b;
})

// Переходы по меню этапов

document.querySelector('.item-map').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.item-map').classList.remove('nav-item__continue');
    document.querySelector('.item-model').classList.remove('nav-item__active');
    document.querySelector('.item-model').classList.add('disabled');
    document.querySelector('.item-dop').classList.add('disabled');
    document.querySelector('.item-itog').classList.add('disabled');
    document.querySelector('.item-map').classList.add('nav-item__active');
    document.querySelector('.content__location').style.display = 'block';
    document.querySelector('.model__inner').style.display = 'none';
    document.querySelector('.btn-model').style.display = 'block';
    document.querySelector('.btn-dop').style.display = 'none';
})

document.querySelector('.item-model').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.item-model').classList.remove('nav-item__continue');
    document.querySelector('.item-dop').classList.remove('nav-item__active');
    document.querySelector('.item-model').classList.add('nav-item__active');
    document.querySelector('.item-itog').classList.add('disabled');
    document.querySelector('.item-dop').classList.add('disabled');
    document.querySelector('.item-map').classList.remove('disabled');
    document.querySelector('.model__inner').style.display = 'block';
    document.querySelector('.dop__inner').style.display = 'none';
    document.querySelector('.btn-dop').style.display = 'block';
    document.querySelector('.btn-itog').style.display = 'none';
})

document.querySelector('.item-dop').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.item-dop').classList.remove('nav-item__continue');
    document.querySelector('.item-itog').classList.remove('nav-item__active');
    document.querySelector('.item-dop').classList.add('nav-item__active');
    document.querySelector('.item-model').classList.remove('disabled');
    document.querySelector('.item-itog').classList.add('disabled');
    document.querySelector('.item-map').classList.add('disabled');
    document.querySelector('.dop__inner').style.display = 'block';
    document.querySelector('.total__inner').style.display = 'none';
    document.querySelector('.btn-itog').style.display = 'block';
    document.querySelector('.btn-total').style.display = 'none';
})


// Заказ модели авто

document.querySelector('.btn-model').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.content__location').style.display = 'none';
    document.querySelector('.model__inner').style.display = 'block';
    document.querySelector('.item-map').classList.remove('nav-item__active');
    document.querySelector('.item-map').classList.add('nav-item__continue');
    document.querySelector('.item-model').classList.add('nav-item__active');
    document.querySelector('.item-model').classList.remove('disabled');
    document.querySelector('.btn-model').style.display = 'none';
    document.querySelector('.btn-dop').style.display = 'block';
})

// Доп услуги

document.querySelector('.btn-dop').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.model__inner').style.display = 'none';
    document.querySelector('.dop__inner').style.display = 'block';
    document.querySelector('.item-model').classList.remove('nav-item__active');
    document.querySelector('.item-map').classList.add('nav-item__continue');
    document.querySelector('.item-model').classList.add('nav-item__continue');
    document.querySelector('.item-dop').classList.add('nav-item__active');
    document.querySelector('.item-map').classList.add('disabled');
    document.querySelector('.item-dop').classList.remove('disabled');
    document.querySelector('.btn-dop').style.display = 'none';
    document.querySelector('.btn-itog').style.display = 'block';
})

// Итог

document.querySelector('.btn-itog').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.dop__inner').style.display = 'none';
    document.querySelector('.total__inner').style.display = 'block';
    document.querySelector('.item-dop').classList.remove('nav-item__active');
    document.querySelector('.item-map').classList.add('nav-item__continue');
    document.querySelector('.item-model').classList.add('nav-item__continue');
    document.querySelector('.item-dop').classList.add('nav-item__continue');
    document.querySelector('.item-itog').classList.add('nav-item__active');
    document.querySelector('.item-dop').classList.remove('disabled');
    document.querySelector('.item-itog').classList.remove('disabled');
    document.querySelector('.item-map').classList.add('disabled');
    document.querySelector('.item-model').classList.add('disabled');
    document.querySelector('.btn-itog').style.display = 'none';
    document.querySelector('.btn-total').style.display = 'block';
})

// Окно подтверждения

document.querySelector('.btn-total').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.modal-window').style.display = 'flex';
})

document.querySelector('.button-accept').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.modal-window').style.display = 'none';
    document.querySelector('.btn-total').style.display = 'none';
    document.querySelector('.btn-cancel').style.display = 'block';
    document.querySelector('.nav').style.display = 'none';
    document.querySelector('.content-text-order').style.display = 'block';
    document.querySelector('.order-end').style.display = 'block';
})

document.querySelector('.button-return').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.modal-window').style.display = 'none';
})

// Фильтр моделей

document.querySelector('.control-li-model').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.control-span-model').classList.add('span__active');
    document.querySelector('.control-span-eko').classList.remove('span__active');
    document.querySelector('.control-span-premium').classList.remove('span__active');
})

document.querySelector('.control-li-eko').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.control-span-eko').classList.add('span__active');
    document.querySelector('.control-span-model').classList.remove('span__active');
    document.querySelector('.control-span-premium').classList.remove('span__active');
})

document.querySelector('.control-li-premium').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.control-span-premium').classList.add('span__active');
    document.querySelector('.control-span-model').classList.remove('span__active');
    document.querySelector('.control-span-eko').classList.remove('span__active');
})

// Выбор машины

document.querySelector('.model-1').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.model-1').classList.add('card-active');
    document.querySelector('.model-2').classList.remove('card-active');
    document.querySelector('.model-3').classList.remove('card-active');
    document.querySelector('.model-4').classList.remove('card-active');
    document.querySelector('.order-model').style.display = 'flex';
    let a = document.querySelector('.elantra').innerHTML;
    document.querySelector('.text-car').innerHTML = 'Hyndai, ' + a;
})

document.querySelector('.model-2').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.model-1').classList.remove('card-active');
    document.querySelector('.model-2').classList.add('card-active');
    document.querySelector('.model-3').classList.remove('card-active');
    document.querySelector('.model-4').classList.remove('card-active');
    document.querySelector('.text-car').innerHTML = "";
    document.querySelector('.order-model').style.display = 'flex';
    let a = document.querySelector('.i30n').innerHTML;
    document.querySelector('.text-car').innerHTML = 'Hyndai, ' + a;
})

document.querySelector('.model-3').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.model-1').classList.remove('card-active');
    document.querySelector('.model-2').classList.remove('card-active');
    document.querySelector('.model-3').classList.add('card-active');
    document.querySelector('.model-4').classList.remove('card-active');
    document.querySelector('.text-car').innerHTML = "";
    document.querySelector('.order-model').style.display = 'flex';
    let a = document.querySelector('.creta').innerHTML;
    document.querySelector('.text-car').innerHTML = 'Hyndai, ' + a;
})

document.querySelector('.model-4').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.model-1').classList.remove('card-active');
    document.querySelector('.model-2').classList.remove('card-active');
    document.querySelector('.model-3').classList.remove('card-active');
    document.querySelector('.model-4').classList.add('card-active');
    document.querySelector('.text-car').innerHTML = "";
    document.querySelector('.order-model').style.display = 'flex';
    let a = document.querySelector('.sonata').innerHTML;
    document.querySelector('.text-car').innerHTML = 'Hyndai, ' + a;
})

// Выбор цвета

document.querySelector('.colors-li-random').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.colors-span-random').classList.add('span__active');
    document.querySelector('.colors-span-red').classList.remove('span__active');
    document.querySelector('.colors-span-blue').classList.remove('span__active');
    document.querySelector('.order-color').style.display = 'flex';
    document.querySelector('.text-color').innerHTML = "";
    let a = document.querySelector('.colors-li-random').innerHTML;
    document.querySelector('.text-color').innerHTML = a;

})

document.querySelector('.colors-li-red').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.colors-span-random').classList.remove('span__active');
    document.querySelector('.colors-span-red').classList.add('span__active');
    document.querySelector('.colors-span-blue').classList.remove('span__active');
    document.querySelector('.order-color').style.display = 'flex';
    document.querySelector('.text-color').innerHTML = "";
    let a = document.querySelector('.colors-li-red').innerHTML;
    document.querySelector('.text-color').innerHTML = a;
})

document.querySelector('.colors-li-blue').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.colors-span-random').classList.remove('span__active');
    document.querySelector('.colors-span-red').classList.remove('span__active');
    document.querySelector('.colors-span-blue').classList.add('span__active');
    document.querySelector('.order-color').style.display = 'flex';
    document.querySelector('.text-color').innerHTML = "";
    let a = document.querySelector('.colors-li-blue').innerHTML;
    document.querySelector('.text-color').innerHTML = a;
})

// Выбор тарифа

document.querySelector('.tarif-li-minut').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.tarif-span-days').classList.remove('span__active');
    document.querySelector('.tarif-span-minut').classList.add('span__active');
    document.querySelector('.order-tarif').style.display = 'flex';
    document.querySelector('.text-tarif').innerHTML = "";
    let a = document.querySelector('.tarif-li-minut').innerHTML;
    document.querySelector('.text-tarif').innerHTML = a;
})

document.querySelector('.tarif-li-days').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.tarif-span-days').classList.add('span__active');
    document.querySelector('.tarif-span-minut').classList.remove('span__active');
    document.querySelector('.order-tarif').style.display = 'flex';
    document.querySelector('.text-tarif').innerHTML = "";
    let a = document.querySelector('.tarif-li-days').innerHTML;
    document.querySelector('.text-tarif').innerHTML = a;
})

// Выбор доп услуг

document.querySelector('#petrol').addEventListener('change', function (e) {
    e.preventDefault();
    let a = document.querySelector('#petrol');
    if ( a.checked ) {
        document.querySelector('.order-petrol').style.display = 'flex';
        document.querySelector('.text-petrol').innerHTML = "Да";
    }
    else {
        document.querySelector('.order-petrol').style.display = 'none';
    }
})

document.querySelector('#child-armchair').addEventListener('change', function (e) {
    e.preventDefault();
    let a = document.querySelector('#child-armchair');
    if ( a.checked ) {
        document.querySelector('.order-child').style.display = 'flex';
        document.querySelector('.text-child').innerHTML = "Да";
    }
    else {
        document.querySelector('.order-child').style.display = 'none';
    }
})

document.querySelector('#right-steering-wheel').addEventListener('change', function (e) {
    e.preventDefault();
    let a = document.querySelector('#right-steering-wheel');
    if ( a.checked ) {
        document.querySelector('.order-right').style.display = 'flex';
        document.querySelector('.text-right').innerHTML = "Да";
    }
    else {
        document.querySelector('.order-right').style.display = 'none';
    }
})