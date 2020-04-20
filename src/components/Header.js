import React from 'react';

import group from '../assets/image/Group.svg';
import { Link } from 'react-router-dom';

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
                        <Link to="/" className="header__logo">Need for drive</Link>
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