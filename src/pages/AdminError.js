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

class AdminError extends React.Component {
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
                                        <div className="error-page">
                                            <div className="error__main">
                                                <h1 className="error-cod">500</h1>
                                                <p className="error-title">Что-то пошло не так</p>
                                                <p className="error-subtitle">Попробуйте перезагрузить страницу</p>
                                                <button className="btn btn-primary error-btn-control">Назад</button>
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

export default AdminError;