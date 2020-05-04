import React from 'react';

import CardAuto from './CardAuto';
import AutoSetting from './AutoSetting';

class MainCarSetting extends React.Component {
    render() {
        return (
            <main>
                <div className="car__body">
                    <h1>Карточка автомобиля</h1>
                    <div className="car__content">
                        <CardAuto />
                        <AutoSetting />
                    </div>
                </div>
            </main>
        )
    }
}

export default MainCarSetting;