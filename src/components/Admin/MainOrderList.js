import React from 'react';

import i30 from '../../assets/image/cars/i30n.png';
import check from '../../assets/image/admin/order-list/check.svg';
import edit from '../../assets/image/admin/order-list/edit.svg';
import reject from '../../assets/image/admin/order-list/reject.svg';

class MainOrderList extends React.Component {
    render() {
        return (
            <main className="main_car-content">
                <div className="car-content__inner">
                    <h1>Заказы</h1>
                    <div className="content__order-list">
                        <div className="order-list__header">
                            <div className="input-group order-list-choose">
                                <select className="custom-select" id="orderlist-Select01">
                                    <option selected>За неделю</option>
                                    <option value="1">За месяц</option>
                                    <option value="2">За день</option>
                                    <option value="3">За год</option>
                                </select>
                                <select className="custom-select" id="orderlist-Select02">
                                    <option selected>Elantra</option>
                                    <option value="1">i30 N</option>
                                    <option value="2">Creta</option>
                                    <option value="3">Solaris</option>
                                </select>
                                <select className="custom-select" id="orderlist-Select03">
                                    <option selected>Ульяновск</option>
                                    <option value="1">Самара</option>
                                    <option value="2">Москва</option>
                                    <option value="3">Казань</option>
                                </select>
                                <select className="custom-select" id="orderlist-Select04">
                                    <option selected>В процессе</option>
                                    <option value="1">Выдана</option>
                                    <option value="2">В гараже</option>
                                    <option value="3">В ремонте</option>
                                </select>
                            </div>
                            <div className="order-list_btn-control">
                                <button className="btn btn-primary order-list-apply">Применить</button>
                            </div>
                        </div>
                        <div className="order-list__content">
                            <div className="order-content_img">
                                <img src={ i30 } alt="i30n" />
                            </div>
                            <div className="order-content_info">
                                <p className="content_info-title"><span className="text-uppercase font-weight-bold">elantra </span>в <span className="font-weight-bold">Ульяновск</span>, Нариманова 42</p>
                                <p className="content_info-date">12.06.2019 12:00 — 13.06.2019 12:00</p>
                                <p className="content_info-color">Цвет: <span className="font-weight-bold">Голубой</span></p>
                            </div>
                            <div className="order-content_checkbox">
                                <div className="order-list-item">
                                    <label for="petrol"><input type="checkbox" name="petrol" id="petrol" />Полный бак</label>
                                </div>
                                <div className="order-list-item">
                                    <label for="child-armchair"><input type="checkbox" name="child-armchair" id="child-armchair" />Детское кресло</label>
                                </div>
                                <div className="order-list-item">
                                    <label for="right-steering-wheel"><input type="checkbox" name="right-steering-wheel" id="right-steering-wheel" />Правый руль</label>
                                </div>
                            </div>
                            <div className="order-content_rent">
                                <p className="font-weight-bold">4300 ₽</p>
                            </div>
                            <div className="order-content_btn-control">
                                <button className="btn-control_order-list btn-control_check"><img src={ check } alt="check" />Готово</button><button className="btn-control_order-list btn-control_reject"><img src={ reject } alt="reject" />Отмена</button><button className="btn-control_order-list btn-control_edit"><img src={ edit } alt="edit" />Изменить</button>
                            </div>
                        </div>
                        <nav className="order-list_pagination">
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                    <a className="page-link" href="index.html" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="index.html">1</a></li>
                                <li className="page-item active"><a className="page-link" href="index.html">2</a></li>
                                <li className="page-item"><a className="page-link" href="index.html">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="index.html" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                    </a>
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