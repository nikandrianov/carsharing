import React from 'react';

import logoAdmin from '../../assets/image/logo_admin_auth.svg';
import menu1 from '../../assets/image/admin/menu1.svg';
import menu2 from '../../assets/image/admin/menu2.svg';
import menu3 from '../../assets/image/admin/menu3.svg';
import menu4 from '../../assets/image/admin/menu4.svg';
import menu5 from '../../assets/image/admin/menu5.svg';
import menu6 from '../../assets/image/admin/menu6.svg';
import menu7 from '../../assets/image/admin/menu7.svg';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar__inner">
                    <nav className="nav-body">
                        <header className="nav-body__header">
                            <img src={ logoAdmin } alt="logo_admin_car" />
                            <h1>Need fo drive</h1>
                        </header>
                        <ul className="nav-body__menu">
                            <li className="item-menu item-menu_active">
                                <img src={ menu1 } alt="menu1" />Карточка автомобиля
                            </li>
                            <li className="item-menu">
                                <img src={ menu2 } alt="menu2" />Список авто
                            </li>
                            <li className="item-menu">
                                <img src={ menu3 } alt="menu3" />Заказы
                            </li>
                            <li className="item-menu">
                                <img src={ menu4 } alt="menu4" />Menu 4
                            </li>
                            <li className="item-menu">
                                <img src={ menu5 } alt="menu5" />Menu 5
                            </li>
                            <li className="item-menu">
                                <img src={ menu6 } alt="menu6" />Menu 6
                            </li>
                            <li className="item-menu">
                                <img src={ menu7 } alt="menu7" />Menu 7
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Sidebar;