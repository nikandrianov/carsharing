import React from 'react';

import vector from '../../assets/image/Vector_order_page.svg';
import x from '../../assets/image/x.svg';
import map from '../../assets/image/map.png';
import elantra from '../../assets/image/cars/elantra.png';
import creta from '../../assets/image/cars/creta.png';
import i30 from '../../assets/image/cars/i30n.png';
import sonata from '../../assets/image/cars/sonata.png';

class OrderContent extends React.Component {
    render() {
        return (
            <main className="main">
                <div className="main__inner">
                    <nav className="nav">
                        <li className="nav-item item-map nav-item__active">
                            Местоположение
                            <img src={ vector} alt="Vector_order_page" />
                        </li>
                        <li className="nav-item item-model disabled">
                            Модель
                            <img src={ vector} alt="Vector_order_page" />
                        </li>
                        <li className="nav-item item-dop disabled">
                            Дополнительно
                            <img src={ vector} alt="Vector_order_page" />
                        </li>
                        <li className="nav-item item-itog disabled">
                            Итого
                        </li>
                    </nav>
                    <nav className="nav order-end">
                        <p>Заказ номер RU58491823</p>
                    </nav>
                    <div className="order__content">
                        <div className="content__location">
                            <div className="location__inner">
                                <form className="form">
                                    <div className="form__city">
                                        <label>Город</label>
                                        <input type="text" id="city" name="city" className="form-input" placeholder="Начните вводить пункт выдачи" />
                                        <img src={ x } alt="x" name="city" id="clear-x" />
                                    </div>
                                    <div className="form__output">
                                        <label>Пункт выдачи</label>
                                        <input type="text" id="output" name="output" className="form-input" placeholder="Начните вводить пункт выдачи" />
                                        <img src={ x } alt="x" name="output" id="clear-x2" />
                                    </div>
                                </form>
                                <div className="map-location">
                                    <h4>Выбрать на карте:</h4>
                                    <div className="location"></div>
                                        <img src={ map } alt="map" />
                                    </div>
                                </div>
                            </div>
                            <div className="model__inner">
                                <div className="model-item">
                                    <ul className="model-control">
                                        <li className="control-li-model"><span className="control-span-model span__active"></span>Модели</li>
                                        <li className="control-li-eko"><span className="control-span-eko"></span>Эконом</li>
                                        <li className="control-li-premium"><span className="control-span-premium"></span>Премиум</li>
                                    </ul>
                                    <div className="model-list">
                                        <div className="card model-1">
                                            <div className="card-body">
                                                <h5 className="card-title text-uppercase elantra">Elantra</h5>
                                                <h6 className="card-subtitle">12 000 - 25 000 ₽</h6>
                                                <img className="card-img-bottom" src={ elantra } alt="elantra" />
                                            </div>
                                        </div>
                                        <div className="card model-2">
                                            <div className="card-body">
                                                <h5 className="card-title i30n">i30 N</h5>
                                                <h6 className="card-subtitle">10 000 - 32 000 ₽</h6>
                                                <img className="card-img-bottom" src={ i30 } alt="i30n" />
                                            </div>
                                        </div>
                                        <div className="card model-3">
                                            <div className="card-body">
                                                <h5 className="card-title text-uppercase creta">Creta</h5>
                                                <h6 className="card-subtitle">12 000 - 25 000 ₽</h6>
                                                <img className="card-img-bottom" src={ creta } alt="creta" />
                                            </div>
                                        </div>
                                        <div className="card model-4">
                                            <div className="card-body">
                                                <h5 className="card-title text-uppercase sonata">Sonata</h5>
                                                <h6 className="card-subtitle">10 000 - 32 000 ₽</h6>
                                                <img className="card-img-bottom" src={ sonata } alt="sonata" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dop__inner">
                                <div className="options">
                                    <h4 className="title">Цвет</h4>
                                    <div className="options-colors">
                                        <ul className="colors-item">
                                            <li className="colors-li-random"><span className="colors-span-random"></span>Любой</li>
                                            <li className="colors-li-red"><span className="colors-span-red"></span>Красный</li>
                                            <li className="colors-li-blue"><span className="colors-span-blue"></span>Голубой</li>
                                        </ul>
                                    </div>
                                    <h4 className="title">Дата аренды</h4>
                                    <form className="form-rent">
                                        <div className="form-rent__date">
                                            <label for="start-rent">C</label>
                                            <input className="rent-input" type="text" name="start-rent" placeholder="Введите дату и время" />
                                            <img src={ x } alt="x" name="start-rent" />
                                        </div>
                                        <div className="form-rent__date">
                                            <label for="end-rent">По</label>
                                            <input className="rent-input" type="text" name="end-rent" placeholder="Введите дату и время" />
                                            <img src={ x } alt="x" name="end-rent" />
                                        </div>
                                    </form>
                                    <h4 className="title">Тариф</h4>
                                    <div className="tarif">
                                        <ul className="tarif-item">
                                            <li className="tarif-li-minut"><span className="tarif-span-minut"></span>Поминутно, 7₽/мин</li>
                                            <li className="tarif-li-days"><span className="tarif-span-days"></span>На сутки, 1999 ₽/сутки</li>
                                        </ul>
                                    </div>
                                    <h4 className="title">Доп услуги</h4>
                                    <div className="services">
                                        <div className="services-item">
                                            <label for="petrol"><input type="checkbox" name="petrol" id="petrol" />Полный бак, 500р</label>
                                        </div>
                                        <div className="services-item">
                                            <label for="child-armchair"><input type="checkbox" name="child-armchair" id="child-armchair" />Детское кресло, 200р</label>
                                        </div>
                                        <div className="services-item">
                                            <label for="right-steering-wheel"><input type="checkbox" name="right-steering-wheel" id="right-steering-wheel" />Правый руль, 1600р</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="total__inner">
                                <div className="total-item">
                                    <div className="item-content">
                                        <div className="content-text">
                                            <p className="content-text-order">Ваш заказ подтвержден</p>
                                            <p className="content-text-model">Hyndai, i30 N</p>
                                            <p className="content-text-number">K 761 HA 73</p>
                                            <p className="content-text-petrol"><span>Топливо</span> 100%</p>
                                            <p className="content-text-date"><span>Доступна с </span>12.06.2019 12:00</p>
                                        </div>
                                        <div className="content-img">
                                            <img src="img/cars/i30n.png" alt="i30n" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-window">
                                <div className="modal__inner">
                                    <h1>Подтвердить заказ</h1>
                                    <button className="btn button-accept">Подтвердить</button>
                                    <button className="btn button-return">Вернуться</button>
                                </div>
                            </div>
                            <div className="content__order">
                                <div className="order">
                                    <h4>Ваш заказ:</h4>
                                    <div className="order__item">
                                        <p>Пункт выдачи</p>
                                        <p>......................</p>
                                        <div className="order__item-location">
                                            <p className="location-text-city"></p>
                                            <p className="location-text-street"></p>
                                        </div>
                                    </div>
                                    <div className="order__item order-model">
                                        <p>Модель</p>
                                        <p>.....................................</p>
                                        <p className="model-text text-car"></p>
                                    </div>
                                    <div className="order__item order-color">
                                        <p>Цвет</p>
                                        <p>.....................................................</p>
                                        <p className="model-text text-color"></p>
                                    </div>
                                    <div className="order__item order-rent">
                                        <p>Длительность аренды</p>
                                        <p className="model-text">1 д 2 ч</p>
                                    </div>
                                    <div className="order__item order-tarif">
                                        <p>Тариф</p>
                                        <p>.....................</p>
                                        <p className="model-text text-tarif">На сутки</p>
                                    </div>
                                    <div className="order__item order-petrol">
                                        <p>Полный бак</p>
                                        <p>......................................</p>
                                        <p className="model-text text-petrol"></p>
                                    </div>
                                    <div className="order__item order-child">
                                        <p>Детское кресло</p>
                                        <p>.....................................</p>
                                        <p className="model-text text-child"></p>
                                    </div>
                                    <div className="order__item order-right">
                                        <p>Правый руль</p>
                                        <p>......................................</p>
                                        <p className="model-text text-right"></p>
                                    </div>
                                    <p className="price">Цена: от 8000 до 12000 ₽</p>
                                    <button className="btn btn-model">Выбрать модель</button>
                                    <button className="btn btn-dop">Дополнительно</button>
                                    <button className="btn btn-itog">Итого</button>
                                    <button className="btn btn-total">Заказать</button>
                                    <button className="btn btn-cancel">Отменить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default OrderContent;