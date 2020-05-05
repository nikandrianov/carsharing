import React from 'react';
import { Link } from 'react-router-dom';

import i30 from '../../assets/image/cars/i30n.png';
import check from '../../assets/image/admin/order-list/check.svg';
import edit from '../../assets/image/admin/order-list/edit.svg';
import reject from '../../assets/image/admin/order-list/reject.svg';

class MainOrderList extends React.Component {
    render() {
        return (
            <main>
                <div className="car__body">
                    <h1>Заказы</h1>
                    <div className="car__order">
                        <div className="item-list item-list__header">
                            <div className="input-group">
                                <select className="custom-select" id="orderlist-Select1">
                                    <option>За неделю</option>
                                    <option>За месяц</option>
                                    <option>За день</option>
                                    <option>За год</option>
                                </select>
                                <select className="custom-select" id="orderlist-Select2">
                                    <option>Elantra</option>
                                    <option>i30 N</option>
                                    <option>Creta</option>
                                    <option>Solaris</option>
                                </select>
                                <select className="custom-select" id="orderlist-Select3">
                                    <option>Ульяновск</option>
                                    <option>Самара</option>
                                    <option>Москва</option>
                                    <option>Казань</option>
                                </select>
                                <select className="custom-select" id="orderlist-Select4">
                                    <option>В процессе</option>
                                    <option>Выдана</option>
                                    <option>В гараже</option>
                                    <option>В ремонте</option>
                                </select>
                            </div>
                            <div>
                                <button className="order-list__apply btn btn-primary">Применить</button>
                            </div>
                        </div>
                        <div className="item-list item-list__content">
                            <div className="item-list__img">
                                <img src={ i30 } alt="i30n" />
                            </div>
                            <div className="item-list__info">
                                <p className="item-list__title"><span className="text-uppercase font-weight-bold">elantra </span>в <span className="font-weight-bold">Ульяновск</span>, Нариманова 42</p>
                                <p className="item-list__date">12.06.2019 12:00 — 13.06.2019 12:00</p>
                                <p className="item-list__color">Цвет: <span className="font-weight-bold">Голубой</span></p>
                            </div>
                            <div className="item-list__checkbox">
                                <div className="item-checkbox">
                                    <label htmlFor="checkbox1"><input type="checkbox" id="checkbox1" />Полный бак</label>
                                </div>
                                <div className="item-checkbox">
                                    <label htmlFor="checkbox2"><input type="checkbox" id="checkbox2" />Детское кресло</label>
                                </div>
                                <div className="item-checkbox">
                                    <label htmlFor="checkbox3"><input type="checkbox" id="checkbox3" />Правый руль</label>
                                </div>
                            </div>
                            <div className="item-list__rent">
                                <p className="font-weight-bold">4300 ₽</p>
                            </div>
                            <div>
                                <button className="item-list__button item-list__check"><img src={ check } alt="check" />Готово</button><button className="item-list__button"><img src={ reject } alt="reject" />Отмена</button><button className="item-list__button item-list__edit"><img src={ edit } alt="edit" />Изменить</button>
                            </div>
                        </div>
                        <nav className="item-list__pagination">
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                    <Link className="page-link" to="/admin/order" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only">Previous</span>
                                    </Link>
                                </li>
                                <li className="page-item"><Link className="page-link" to="/admin/order">1</Link></li>
                                <li className="page-item active"><Link className="page-link" to="/admin/order">2</Link></li>
                                <li className="page-item"><Link className="page-link" to="/admin/order">3</Link></li>
                                <li className="page-item">
                                    <Link className="page-link" to="/admin/order" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </main>
        )
    }
}

export default MainOrderList;