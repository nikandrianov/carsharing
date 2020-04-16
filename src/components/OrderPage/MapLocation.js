import React from 'react';

import map from '../../assets/image/map.png';
import x from '../../assets/image/x.svg';

class MapLocation extends React.Component {
    render() {
        return (
            <div className="content__location">
                <div className="location__inner">
                    <form className="form">
                        <div className="form__city">
                            <label>Город</label>
                            <input type="text" id="city" name="city" className="form-input" placeholder="Начните вводить пункт выдачи" />
                            <img src={ x } alt="x" name="city" id="clear-x" />
                        </div>
                        <div className="form__output">
                            <label>Пункт выдачи</label>
                            <input type="text" id="output" name="output" className="form-input" placeholder="Начните вводить пункт выдачи" />
                            <img src={ x } alt="x" name="output" id="clear-x2" />
                        </div>
                    </form>
                    <div className="map-location">
                        <h4>Выбрать на карте:</h4>
                        <div className="location">
                            <img src={ map } alt="map" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MapLocation;