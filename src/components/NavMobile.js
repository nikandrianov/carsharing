import React from 'react';

class NavMobile extends React.Component {
    render() {
        return (
            <nav className="nav__inner">
                <ul className="nav__inner_menu">
                    <li className="text-uppercase">Парковка</li>
                    <li className="text-uppercase">Страховка</li>
                    <li className="text-uppercase">Бензин</li>
                    <li className="text-uppercase">Обслуживание</li>
                </ul>
                <ul className="nav__inner_mess">
                    <li className="mess__button">
                        {/* <a href="#"><img src="./img/telegram.svg" alt="telegram" /></a> */}
                    </li>
                    <li className="mess__button">
                        {/* <a href="#"><img src="./img/facebook.svg" alt="facebook" /></a> */}
                    </li>
                    <li className="mess__button">
                        {/* <a href="#"><img src="./img/Instagram.svg" alt="Instagram" /></a> */}
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavMobile;