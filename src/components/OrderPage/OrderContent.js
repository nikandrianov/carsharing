import React from 'react';

import NavOrder from './NavOrder';
import MapLocation from './MapLocation';
import Models from './Models';
import Additiontal from './Additiontal';
import Total from './Total';
import ModalWindow from './ModalWindow';
import OrderZone from './OrderZone';

let contentLocation = React.createRef();
let modelInner = React.createRef();
let dopInner = React.createRef();
let totalInner = React.createRef();
let btnModel = React.createRef();
let btnDop = React.createRef();
let btnItog = React.createRef();
let btnTotal = React.createRef();
let btnCancel = React.createRef();
let itemModel = React.createRef();
let itemDop = React.createRef();
let itemMap = React.createRef();
let itemItog = React.createRef();

class OrderContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            street: "",
            // display: true,
            active: ""
        }

        this.cityChange = this.cityChange.bind(this);
        this.streetChange = this.streetChange.bind(this);
        this.cityClick = this.cityClick.bind(this);
        this.streetClick = this.streetClick.bind(this);
        this.btnClickModel = this.btnClickModel.bind(this);
        this.btnClickDop = this.btnClickDop.bind(this);
        this.btnClickItog = this.btnClickItog.bind(this);
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

    btnClickModel () {
        contentLocation.current.style.display = "none";
        modelInner.current.style.display = "block";
        btnModel.current.style.display = "none";
        btnDop.current.style.display = "block";
        itemMap.current.classList.remove('nav-item__active');
        itemMap.current.classList.add('nav-item__continue');
        itemModel.current.classList.add('nav-item__active');
        itemModel.current.classList.remove('disabled');
    }

    btnClickDop () {
        modelInner.current.style.display = 'none';
        dopInner.current.style.display = 'block';
        itemModel.current.classList.remove('nav-item__active');
        itemMap.current.classList.add('nav-item__continue');
        itemModel.current.classList.add('nav-item__continue');
        itemDop.current.classList.add('nav-item__active');
        itemMap.current.classList.add('disabled');
        itemDop.current.classList.remove('disabled');
        btnDop.current.style.display = 'none';
        btnItog.current.style.display = 'block';
    }

    btnClickItog () {
        dopInner.current.style.display = 'none';
        totalInner.current.style.display = 'block';
        itemDop.current.classList.remove('nav-item__active');
        itemMap.current.classList.add('nav-item__continue');
        itemModel.current.classList.add('nav-item__continue');
        itemDop.current.classList.add('nav-item__continue');
        itemItog.current.classList.add('nav-item__active');
        itemDop.current.classList.remove('disabled');
        itemItog.current.classList.remove('disabled');
        itemMap.current.classList.add('disabled');
        itemModel.current.classList.add('disabled');
        btnItog.current.style.display = 'none';
        btnTotal.current.style.display = 'block';
    }

    render() {
        return (
            <main className="main">
                <div className="main__inner">
                    <NavOrder 
                        itemMap={itemMap}
                        itemModel={itemModel}
                        itemDop={itemDop}
                        itemItog={itemItog}
                    />
                    <div className="order__content">
                        <MapLocation 
                            city={this.state.city}
                            street={this.state.street}
                            cityChange={this.cityChange}
                            streetChange={this.streetChange}
                            delCity={this.cityClick}
                            delStreet={this.streetClick}
                            btnChangeModel={this.state.display}
                            contentLocation={contentLocation}
                        />
                        <Models 
                            modelInner={modelInner}
                        />
                        <Additiontal 
                            dopInner={dopInner}
                        />
                        <Total 
                            totalInner={totalInner}
                        />
                        <ModalWindow />
                        <OrderZone 
                            city={this.state.city}
                            street={this.state.street}
                            btnClickModel={this.btnClickModel}
                            btnClickDop={this.btnClickDop}
                            btnClickItog={this.btnClickItog}
                            btnModel={btnModel}
                            btnDop={btnDop}
                            btnItog={btnItog}
                            btnTotal={btnTotal}
                            btnCancel={btnCancel}
                        />
                    </div>
                </div>
            </main>
        )
    }
}

export default OrderContent;