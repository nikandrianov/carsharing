import React from 'react';

import avatar from '../../assets/image/admin/avatar.png';
import bell from '../../assets/image/admin/bell.svg';
import search from '../../assets/image/admin/search.svg';

class HeaderAdmin extends React.Component {
    render() {
        return (
            <header className="main_header"> 
                <div className="main_header-search">
                    <p className="search">
                        <img src={ search } alt="search" />
                        <input type="text" placeholder="Поиск..." />
                    </p>
                </div>
                <div className="main_header-userinfo">
                    <div className="userinfo_bell">
                        <img src={ bell } alt="bell" className="bell" />
                        <span className="count">2</span>
                    </div>
                    <div className="userinfo_user">
                        <img src={ avatar } alt="avatar" className="avatar" />
                        <p className="user">Admin</p>
                    </div>
                    <div className="dropdown">
                        <button id="my-dropdown" className="btn dropdown-toggle" data-toggle="dropdown"></button>
                        <div className="dropdown-menu" aria-labelledby="my-dropdown">
                            {/* <a className="dropdown-item active" href="index.html">Text</a> */}
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default HeaderAdmin;