import React from 'react';

import group from '../assets/image/Group.svg';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <header>
                <div className="header__mobile">
                    <div className="header__hamburger" onClick={this.props.onClickHamburger}>
                        <div className="header__item">
                            <span className="item-hamburger"></span>
                        </div>
                    </div>
                    <div className="header__logo">
                        <Link to="/" className="header__title">Need for drive</Link>
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