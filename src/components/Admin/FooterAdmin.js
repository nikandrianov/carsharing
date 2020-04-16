import React from 'react';

class FooterAdmin extends React.Component {
    render() {
        return (
            <footer className="main_footer navber-fixed-bottom">
                <div className="footer-ul">
                    <li><a href="index.html">Главная страница</a></li>
                    <li><a href="index.html">Ссылка</a></li>
                </div>
                <div className="footer-simbirsoft">
                    <p>Copyright © 2020 Simbirsoft</p>
                </div>
            </footer>
        )
    }
}

export default FooterAdmin;