import "../css/main.scss";
import 'bootstrap';
import 'jquery';
import 'popper.js';

document.querySelector('.c-hamburger').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.container__open_burger').style.display = 'block';
})
document.querySelector('.burger').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.container__open_burger').style.display = 'none';
})
document.querySelector('.hamburger').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.container__open_burger').style.display = 'block';
})