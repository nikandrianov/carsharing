import React from 'react';
import {Link} from 'react-router-dom';

class MainContent extends React.Component {
    render() {
        return (
            <main>
                <div className="main__content">
                    <h1>Каршеринг</h1>
                    <h2>Need for drive</h2>
                    <p>Поминутная аренда авто твоего города</p>
                </div>
                <Link to="/order"><button className="main__button">Забронировать</button></Link>
            </main>
        )
    }
}

export default MainContent;