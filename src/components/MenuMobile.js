import React from 'react';
import NavMobile from './NavMobile';

class MenuMobile extends React.Component {
    render() {
        return (
            <div className="container__open_burger">
                <div className="burger_menu">
                    <div className="burger__menu_inner">
                        <div className="burger">
                            <div className="burger__inner">
                                <span className="burger__item"></span>
                            </div>
                        </div>
                        <NavMobile />
                        <div className="lang">
                            <button className="lang__button">Eng</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuMobile;