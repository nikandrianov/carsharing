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