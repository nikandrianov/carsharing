import React from 'react';

import i30 from '../../assets/image/cars/i30n.png';

class Total extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="total__inner" ref={this.props.totalInner}>
                <div className="total-item">
                    <div className="item-content">
                        <div className="content-text">
                            <p className="content-text-order" ref={this.props.textOrder}>Ваш заказ подтвержден</p>
                            <p className="content-text-model">Hyndai, i30 N</p>
                            <p className="content-text-number">K 761 HA 73</p>
                            <p className="content-text-petrol"><span>Топливо</span> 100%</p>
                            <p className="content-text-date"><span>Доступна с </span>12.06.2019 12:00</p>
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