import React from 'react';
import { Link } from 'react-router-dom';

class NavMobile extends React.Component {
    render() {
        return (
            <nav className="nav__body">
                <ul className="nav__menu">
                    <li className="text-uppercase">Парковка</li>
                    <li className="text-uppercase">Страховка</li>
                    <li className="text-uppercase">Бензин</li>
                    <li className="text-uppercase">Обслуживание</li>
                </ul>
                <ul className="item-messager">
                    <li className="item-messager__button">
                        <Link to="https://telegram.com/" className="item-messager__telegram"></Link>
                    </li>
                    <li className="item-messager__button">
                        <Link to="https://facebook.com/" className="item-messager__facebook"></Link>
                    </li>
                    <li className="item-messager__button">
                        <Link to="https://instagram.com/" className="item-messager__instagram"></Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavMobile;