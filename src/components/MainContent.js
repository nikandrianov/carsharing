import React from 'react';

class MainContent extends React.Component {
    render() {
        return (
            <main>
                <div className="main__content">
                    <h1>Каршеринг</h1>
                    <h2>Need for drive</h2>
                    <p>Поминутная аренда авто твоего города</p>
                </div>
                <a href="order.html"><button className="main__button">Забронировать</button></a>
            </main>
        )
    }
}

export default MainContent;