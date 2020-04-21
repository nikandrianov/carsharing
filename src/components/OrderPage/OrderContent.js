import React from 'react';

import NavOrder from './NavOrder';
import MapLocation from './MapLocation';
import Models from './Models';
import Additiontal from './Additiontal';
import Total from './Total';
import ModalWindow from './ModalWindow';
import OrderZone from './OrderZone';

class OrderContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            street: ""
        }

        this.cityChange = this.cityChange.bind(this);
        this.streetChange = this.streetChange.bind(this);
        this.cityClick = this.cityClick.bind(this);
        this.streetClick = this.streetClick.bind(this);
    }

    cityClick () {
        this.setState ({
            city: ""
        })
    }

    streetClick () {
        this.setState ({
            street: ""
        })
    }

    cityChange (e) {
        this.setState ({
            city: e.target.value
        })
    }

    streetChange (e) {
        this.setState ({
            street: e.target.value
        })
    }

    render() {
        return (
            <main className="main">
                <div className="main__inner">
                    <NavOrder />
                    <div className="order__content">
                        <MapLocation 
                            city={this.state.city}
                            street={this.state.street}
                            cityChange={this.cityChange}
                            streetChange={this.streetChange}
                            delCity={this.cityClick}
                            delStreet={this.streetClick}
                        />
                        <Models />
                        <Additiontal />
                        <Total />
                        <ModalWindow />
                        <OrderZone 
                            city={this.state.city}
                            street={this.state.street}
                        />
                    </div>
                </div>
            </main>
        )
    }
}

export default OrderContent;