import React from 'react';

import group from '../assets/image/Group.svg';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header__mobile">
                    <div className="hamburger">
                        <div className="hamburger__inner">
                            <span className="hamburger__item"></span>
                        </div>
                    </div>
                    <div className="header__inner">
                        <a href="index.html" className="header__logo">Need for drive</a>
                        <div className="header__geolocation">
                            <img src={ group } alt="map" />
                            <p>Ульяновск</p>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;