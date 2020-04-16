import React from 'react';

import CardAuto from './CardAuto';
import AutoSetting from './AutoSetting';

class MainCarSetting extends React.Component {
    render() {
        return (
            <main className="main_car-content">
                <div className="car-content__inner">
                    <h1>Карточка автомобиля</h1>
                    <div className="car-content__item">
                        <CardAuto />
                        <AutoSetting />
                    </div>
                </div>
            </main>
        )
    }
}

export default MainCarSetting;