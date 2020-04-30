import React from 'react';
import { Link } from 'react-router-dom';

import telegram from '../assets/image/telegram.svg';
import facebook from '../assets/image/facebook.svg';
import instagram from '../assets/image/Instagram.svg';

class NavMobile extends React.Component {
    render() {
        return (
            <nav className="nav__body">
                <ul className="item-menu">
                    <li className="text-uppercase">Парковка</li>
                    <li className="text-uppercase">Страховка</li>
                    <li className="text-uppercase">Бензин</li>
                    <li className="text-uppercase">Обслуживание</li>
                </ul>
                <ul className="item-messager">
                    <li className="item-messager__button">
                        <Link to="/telegram.com"><img src={telegram} alt="telegram" /></Link>
                    </li>
                    <li className="item-messager__button">
                        <Link to="/facebook.com"><img src={facebook} alt="facebook" /></Link>
                    </li>
                    <li className="item-messager__button">
                        <Link to="/instagram.com"><img src={instagram} alt="Instagram" /></Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavMobile;