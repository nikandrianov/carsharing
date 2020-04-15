import React from 'react';

import logoAdmin from '../assets/image/logo_admin_auth.svg';
import avatar from '../assets/image/admin/avatar.png';
import bell from '../assets/image/admin/bell.svg';
import menu1 from '../assets/image/admin/menu1.svg';
import menu2 from '../assets/image/admin/menu2.svg';
import menu3 from '../assets/image/admin/menu3.svg';
import menu4 from '../assets/image/admin/menu4.svg';
import menu5 from '../assets/image/admin/menu5.svg';
import menu6 from '../assets/image/admin/menu6.svg';
import menu7 from '../assets/image/admin/menu7.svg';
import search from '../assets/image/admin/search.svg';
import i30 from '../assets/image/cars/i30n.png';
import check from '../assets/image/admin/order-list/check.svg';
import edit from '../assets/image/admin/order-list/edit.svg';
import reject from '../assets/image/admin/order-list/reject.svg';

class AdminOrderList extends React.Component {
    render() {
        return (
            <div className="wrapper_admin">
                <div className="container-fluid">
                    <div className="container-car-setting">
                        {/* <!-- Start Sidebar --> */}
                        <div className="sidebar">
                            <div className="sidebar__inner">
                                <nav className="sidebar__item">
                                    <header className="sidebar__logo">
                                        <img src={ logoAdmin } alt="logo_admin_car" />
                                        <h1>Need fo drive</h1>
                                    </header>
                                    <ul className="sidebar__list">
                                        <li className="sidebar__menu">
                                            <img src={ menu1 } alt="menu1" />Карточка автомобиля
                                        </li>
                                        <li className="sidebar__menu">
                                            <img src={ menu2 } alt="menu2" />Список авто
                                        </li>
                                        <li className="sidebar__menu">
                                            <img src={ menu3 } alt="menu3" />Заказы
                                        </li>
                                        <li className="sidebar__menu">
                                            <img src={ menu4 } alt="menu4" />Menu 4
                                        </li>
                                        <li className="sidebar__menu">
                                            <img src={ menu5 } alt="menu5" />Menu 5
                                        </li>
                                        <li className="sidebar__menu">
                                            <img src={ menu6 } alt="menu6" />Menu 6
                                        </li>
                                        <li className="sidebar__menu">
                                            <img src={ menu7 } alt="menu7" />Menu 7
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        {/* <!-- End Sidebar -->
                        <!-- Start Main Content --> */}
                        <div className="content-admin">
                            <div className="content-admin__inner">
                                <div className="content-admin__item">
                                    {/* <!-- Start Header --> */}
                                    <header className="main_header"> 
                                        <div className="main_header-search">
                                            <p className="search">
                                                <img src={ search } alt="search" />
                                                <input type="text" placeholder="Поиск..." />
                                            </p>
                                        </div>
                                        <div className="main_header-userinfo">
                                            <div className="userinfo_bell">
                                                <img src={ bell } alt="bell" className="bell" />
                                                <span className="count">2</span>
                                            </div>
                                            <div className="userinfo_user">
                                                <img src={ avatar } alt="avatar" className="avatar" />
                                                <p className="user">Admin</p>
                                                <div className="dropdown">
                                                    <button id="my-dropdown" className="btn dropdown-toggle" data-toggle="dropdown"></button>
                                                    <div className="dropdown-menu" aria-labelledby="my-dropdown">
                                                        {/* <a className="dropdown-item active" href="#">Text</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </header>
                                    {/* <!-- End Header --> */}
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
                                                        {/* <a className="page-link" href="#" aria-label="Previous">
                                                        <span aria-hidden="true">&laquo;</span>
                                                        <span className="sr-only">Previous</span>
                                                        </a> */}
                                                    </li>
                                                    {/* <li className="page-item"><a className="page-link" href="#">1</a></li> */}
                                                    {/* <li className="page-item active"><a className="page-link" href="#">2</a></li> */}
                                                    {/* <li className="page-item"><a className="page-link" href="#">3</a></li> */}
                                                    <li className="page-item">
                                                        {/* <a className="page-link" href="#" aria-label="Next">
                                                        <span aria-hidden="true">&raquo;</span>
                                                        <span className="sr-only">Next</span>
                                                        </a> */}
                                                    </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </main>
                                    {/* <!-- End Main Content -->
                                    <!-- Start Footer --> */}
                                    <footer className="main_footer navber-fixed-bottom">
                                        <div className="footer-ul">
                                            {/* <li><a href="#">Главная страница</a></li>
                                            <li><a href="#">Ссылка</a></li> */}
                                        </div>
                                        <div className="footer-simbirsoft">
                                            <p>Copyright © 2020 Simbirsoft</p>
                                        </div>
                                    </footer>
                                    {/* <!-- End Footer --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminOrderList;