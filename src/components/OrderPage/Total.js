import React from 'react';

import i30 from '../../assets/image/cars/i30n.png';

class Total extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="total" ref={this.props.totalInner}>
                <div className="total__inner">
                    <div className="total__content">
                        <div className="content-text">
                            <p className="content-text__order" ref={this.props.textOrder}>Ваш заказ подтвержден</p>
                            <p className="content-text__model">Hyndai, i30 N</p>
                            <p className="content-text__number">K 761 HA 73</p>
                            <p className="content-text__petrol"><span>Топливо</span> 100%</p>
                            <p className="content-text__date"><span>Доступна с </span>12.06.2019 12:00</p>
                        </div>
                        <div className="content-img">
                            <img src={ i30 } alt="i30n" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Total;