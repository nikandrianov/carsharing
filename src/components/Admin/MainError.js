import React from 'react';
import { Link } from 'react-router-dom';

class MainError extends React.Component {
    render() {
        return (
            <main>
                <div className="error">
                    <h1 className="error__cod">500</h1>
                    <p className="error__title">Что-то пошло не так</p>
                    <p className="error__subtitle">Попробуйте перезагрузить страницу</p>
                    <Link to="/admin/setting"><button className="btn btn-primary error__button">Назад</button></Link>
                </div>
            </main>
        )
    }
}

export default MainError;