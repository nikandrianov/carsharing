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

class AdminCarSetting extends React.Component {
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
                                            <h1>Карточка автомобиля</h1>
                                            <div className="car-content__item">
                                                {/* <!-- Start Car Card --> */}
                                                <div className="card-car">
                                                    <div className="card-body car-info">
                                                        <img className="card-img-top" src={ i30 } alt="i30n" />
                                                        <h5 className="card-title">Hyundai, i30 N</h5>
                                                        <p className="card-text">Компакт-кар</p>
                                                    </div>
                                                    <div className="input-group car-img-file">
                                                        <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="inputGroupFile" />
                                                        <label className="custom-file-label" for="inputGroupFile">Выберите файл...</label>
                                                        </div>
                                                    </div>
                                                    <div className="progress-info">
                                                        <div className="info-text">
                                                            <p className="text-full">Заполнено</p>
                                                            <p className="text-procent">74%</p>
                                                        </div>
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <div className="card-body card-description">
                                                        <h5 className="card-title_desc">Описание</h5>
                                                        <p className="card-text_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sunt dolor culpa maiores quam maxime ipsum illum, voluptatum fuga rem iure omnis tempore sed quos minus fugiat veritatis dolorum expedita.</p>
                                                    </div>
                                                </div>
                                                {/* <!-- End Car Card -->
                                                <!-- Start Car Setting --> */}
                                                <div className="car-setting">
                                                    <h1>Настройки автомобиля</h1>
                                                    <div className="car-setting__inner item-top">
                                                        <div className="car-setting__item">
                                                            <label for="car-setting_model">Модель автомобиля</label>
                                                            <input type="text" id="car-setting_model" />
                                                        </div>
                                                        <div className="car-setting__item type-margin">
                                                            <label for="car-setting_type">Тип автомобиля</label>
                                                            <input type="text" id="car-setting_type" />
                                                        </div>
                                                    </div>
                                                    <div className="car-setting__inner item-bot">
                                                        <div className="car-setting__item">
                                                            <label for="car-setting_colors">Доступные цвета</label>
                                                            <input type="text" id="car-setting_colors" />
                                                        </div>
                                                        <button className="btn colors-plus">
                                                            <span></span>
                                                        </button>
                                                    </div>
                                                    <div className="clr-checkbox">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="defaultChecked1" checked />
                                                            <label className="custom-control-label" for="defaultChecked1">Красный</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="defaultChecked2" checked />
                                                            <label className="custom-control-label" for="defaultChecked2">Белый</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="defaultChecked3" checked />
                                                            <label className="custom-control-label" for="defaultChecked3">Черный</label>
                                                        </div>
                                                    </div>
                                                    <div className="btn-setting">
                                                        <div className="btn-setting__control">
                                                            <button className="btn btn-default btn-primary control-save">Сохранить</button>
                                                            <button className="btn btn-default control-cancel">Отменить</button>
                                                        </div>
                                                        <div className="btn-setting__delete">
                                                            <button className="btn btn-default btn-danger control-delete">Удалить</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- End Car Setting --> */}
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

export default AdminCarSetting;