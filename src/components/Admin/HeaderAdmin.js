import React from 'react';
import { Link } from 'react-router-dom';

import avatar from '../../assets/image/admin/avatar.png';
import bell from '../../assets/image/admin/bell.svg';
import search from '../../assets/image/admin/search.svg';

class HeaderAdmin extends React.Component {
    render() {
        return (
            <header className="header__admin"> 
                <div className="header__search">
                    <p className="search">
                        <img src={ search } alt="search" />
                        <input type="text" placeholder="Поиск..." />
                    </p>
                </div>
                <div className="header__userinfo">
                    <div className="item-userinfo item-userinfo__bell">
                        <img src={ bell } alt="bell" className="bell" />
                        <span className="count">2</span>
                    </div>
                    <div className="item-userinfo item-userinfo__user">
                        <img src={ avatar } alt="avatar" className="avatar" />
                        <p className="user">Admin</p>
                    </div>
                    <div className="item-userinfo dropdown">
                        <button id="my-dropdown" className="btn dropdown-toggle" data-toggle="dropdown"></button>
                        <div className="dropdown-menu dropdown-menu-left" aria-labelledby="my-dropdown">
                            <Link to="/admin/setting" className="dropdown-item active">Admin2</Link>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default HeaderAdmin;