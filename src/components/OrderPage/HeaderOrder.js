import React from 'react';
import group from '../../assets/image/Group.svg';

class HeaderOrder extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header__inner">
                    <a href="index.html">Need for drive</a>
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