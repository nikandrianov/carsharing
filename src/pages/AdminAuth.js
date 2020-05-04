import React from 'react';
import { Link } from "react-router-dom";

import logoAdmin from '../assets/image/logo_admin_auth.svg';

class AdminAuth extends React.Component {
    render() {
        return (
            <div className="wrapper__admin">
                <div className="container">
                    <div className="container__body">
                        <div className="container__logo">
                            <img src={ logoAdmin } alt="logo_admin_auth" />
                            <h1>Need for drive</h1>
                        </div>
                        <div className="container__auth">
                            <h1>Вход</h1>
                            <form className="form-auth">
                                <div className="form-group">
                                    <label for="Email">Почта</label>
                                    <input type="email" className="form-control" id="Email" />
                                </div>
                                <div className="form-group">
                                    <label for="Password">Пароль</label>
                                    <input type="password" className="form-control" id="Password" />
                                </div>
                                <div className="form-enter">
                                    <Link to="/admin/">Запросить доступ</Link>
                                    <Link to="/admin/setting"><button type="submit" className="btn btn-primary btn-enter">Войти</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminAuth;