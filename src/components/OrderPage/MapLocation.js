import React from 'react';

import map from '../../assets/image/map.jpg';
import x from '../../assets/image/x.svg';

class MapLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
       return (
            <div className="location" ref={this.props.contentLocation}>
                <div className="location__inner">
                    <form className="form">
                        <div className="item-form item-form__city">
                            <label>Город</label>
                            <input type="text" id="city" name="city" className="item-form__input" placeholder="Начните вводить пункт выдачи" value={this.props.city} onChange={this.props.cityChange}/>
                            <img src={ x } alt="x" name="city" id="clear-x" onClick={this.props.delCity}/>
                        </div>
                        <div className="item-form item-form__output">
                            <label>Пункт выдачи</label>
                            <input type="text" id="output" name="output" className="item-form__input" placeholder="Начните вводить пункт выдачи" value={this.props.street} onChange={this.props.streetChange}/>
                            <img src={ x } alt="x" name="output" id="clear-x2" onClick={this.props.delStreet}/>
                        </div>
                    </form>
                    <div className="map">
                        <h4>Выбрать на карте:</h4>
                        <div className="item-map">
                            <img src={ map } alt="map" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MapLocation;