import React from 'react';
import { Link } from 'react-router-dom';

class FooterAdmin extends React.Component {
    render() {
        return (
            <footer className="footer__body navbar-fixed-bottom">
                <div className="footer__link">
                    <li><Link to="/admin/setting">Главная страница</Link></li>
                    <li><Link to="/admin/setting">Ссылка</Link></li>
                </div>
                <div className="footer__copyright">
                    <p>Copyright © 2020 Simbirsoft</p>
                </div>
            </footer>
        )
    }
}

export default FooterAdmin;