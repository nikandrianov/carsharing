import React from 'react';

class MainError extends React.Component {
    render() {
        return (
            <main className="main_car-content">
                <div className="error-page">
                    <div className="error__main">
                        <h1 className="error-cod">500</h1>
                        <p className="error-title">Что-то пошло не так</p>
                        <p className="error-subtitle">Попробуйте перезагрузить страницу</p>
                        <button className="btn btn-primary error-btn-control">Назад</button>
                    </div>
                </div>
            </main>
        )
    }
}

export default MainError;