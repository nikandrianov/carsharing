import React from 'react';
import group from '../../assets/image/Group.svg';
import { Link } from 'react-router-dom';

class HeaderOrder extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header__inner">
                    <Link to="/">Need for drive</Link>
                    <div className="header__geolocation">
                        <img src={ group } alt="location" />
                        <p>Ульяновск</p>
                    </div>
                </div>
            </header>
        )
    }
}

export default HeaderOrder;