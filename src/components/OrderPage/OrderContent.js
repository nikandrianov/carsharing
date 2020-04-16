import React from 'react';

import NavOrder from './NavOrder';
import MapLocation from './MapLocation';
import Models from './Models';
import Additiontal from './Additiontal';
import Total from './Total';
import ModalWindow from './ModalWindow';
import OrderZone from './OrderZone';

class OrderContent extends React.Component {
    render() {
        return (
            <main className="main">
                <div className="main__inner">
                    <NavOrder />
                    <div className="order__content">
                        <MapLocation />
                        <Models />
                        <Additiontal />
                        <Total />
                        <ModalWindow />
                        <OrderZone />
                    </div>
                </div>
            </main>
        )
    }
}

export default OrderContent;