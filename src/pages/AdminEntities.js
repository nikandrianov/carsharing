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

class AdminEntities extends React.Component {
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
                                            <h1>Entitites</h1>
                                            <div className="content_entities">
                                                <div className="entities_header">
                                                    <div className="input-group entities-choose">
                                                        <select className="custom-select" id="inputGroupSelect01">
                                                        <option selected>Field</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                        </select>
                                                        <select className="custom-select" id="inputGroupSelect02">
                                                            <option selected>Field</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                        <select className="custom-select" id="inputGroupSelect03">
                                                            <option selected>Field</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                        <select className="custom-select" id="inputGroupSelect04">
                                                            <option selected>Field</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                    <div className="entities_btn-control">
                                                        <button className="btn btn-danger entities-reset">Reset</button>
                                                        <button className="btn btn-primary entities-apply">Apply</button>
                                                    </div>
                                                </div>
                                                <div className="entities_table">
                                                    <table className="table table-borderless">
                                                        <thead className="entities_thead">
                                                            <tr>
                                                            <th>Header</th>
                                                            <th>Header</th>
                                                            <th>Header</th>
                                                            <th>Header</th>
                                                            <th>Header</th>
                                                            <th>Header</th>
                                                            <th>Header</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="entities_tbody">
                                                            <tr>
                                                            <td>Value</td>
                                                            <td>19,291</td>
                                                            <td>19,291</td>
                                                            <td>19,291</td>
                                                            <td>19,291</td>
                                                            <td>19,291</td>
                                                            <td></td>
                                                            </tr>
                                                            <tr>
                                                            <td>Value</td>
                                                            <td>19,291</td>
                                                            <td>19,291</td>
                                                            <td>19,291</td>
                                                            <td>19,291</td>
                                                            <td>19,291</td>
                                                            <td></td>
                                                            </tr>
                                                            <tr>
                                                            <td>Value</td>
                                                            <td>19,291</td>
                                                            <td>19,291</td>
                                                            <td>19,291</td>
                                                            <td>19,291</td>
                                                            <td>19,291</td>
                                                            <td></td>
                                                            </tr>
                                                            <tr>
                                                            <td>Value</td>
                                                            <td>19,291</td>
                                                            <td>19,291</td>
                                                            <td>19,291</td>
                                                            <td>19,291</td>
                                                            <td>19,291</td>
                                                            <td></td>
                                                            </tr>
                                                            <tr>
                                                            <td>Value</td>
                                                            <td>19,291</td>
                                                            <td>19,291</td>
                                                            <td>19,291</td>
                                                            <td>19,291</td>
                                                            <td>19,291</td>
                                                            <td></td>
                                                            </tr>
                                                            <tr>
                                                            <td>Value</td>
                                                            <td>19,291</td>
                                                            <td>19,291</td>
                                                            <td>19,291</td>
                                                            <td>19,291</td>
                                                            <td>19,291</td>
                                                            <td></td>
                                                            </tr>
                                                            <tr>
                                                            <td>Value</td>
                                                            <td>19,291</td>
                                                            <td>19,291</td>
                                                            <td>19,291</td>
                                                            <td>19,291</td>
                                                            <td>19,291</td>
                                                            <td></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <nav className="entities_pagination">
                                                    <ul className="pagination justify-content-center">
                                                        <li className="page-item">
                                                            {/* <a className="page-link" href="#" aria-label="Previous">
                                                            <span aria-hidden="true">&laquo;</span>
                                                            <span className="sr-only">Previous</span>
                                                            </a> */}
                                                        </li>
                                                        {/* <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                        <li className="page-item active"><a className="page-link" href="#">2</a></li>
                                                        <li className="page-item"><a className="page-link" href="#">3</a></li> */}
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

export default AdminEntities;