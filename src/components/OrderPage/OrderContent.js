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
let modalWindow = React.createRef();
let nav = React.createRef();
let orderEnd = React.createRef();
let btnModel = React.createRef();
let btnDop = React.createRef();
let btnItog = React.createRef();
let btnTotal = React.createRef();
let textOrder = React.createRef();
let btnCancel = React.createRef();
let btnAccept = React.createRef();
let btnReturn = React.createRef();
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
        }

        this.cityChange = this.cityChange.bind(this);
        this.streetChange = this.streetChange.bind(this);
        this.cityClick = this.cityClick.bind(this);
        this.streetClick = this.streetClick.bind(this);
        this.btnClickModel = this.btnClickModel.bind(this);
        this.btnClickDop = this.btnClickDop.bind(this);
        this.btnClickItog = this.btnClickItog.bind(this);
        this.btnClickTotal = this.btnClickTotal.bind(this);
        this.btnClickAccept = this.btnClickAccept.bind(this);
        this.btnClickReturn = this.btnClickReturn.bind(this);
        this.aClickMap = this.aClickMap.bind(this);
        this.aClickModel = this.aClickModel.bind(this);
        this.aClickDop = this.aClickDop.bind(this);
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
        e.preventDefault();
        this.setState ({
            city: e.target.value
        })
    }

    streetChange (e) {
        e.preventDefault();
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

    btnClickTotal () {
        modalWindow.current.style.display = 'flex';
    }

    btnClickAccept () {
        modalWindow.current.style.display = 'none';
        btnTotal.current.style.display = 'none';
        btnCancel.current.style.display = 'block';
        nav.current.style.display = 'none';
        textOrder.current.style.display = 'block';
        orderEnd.current.style.display = 'block';
    }

    btnClickReturn () {
        modalWindow.current.style.display = 'none';
    }

    aClickMap () {
        itemMap.current.classList.remove('nav-item__continue');
        itemModel.current.classList.remove('nav-item__active');
        itemModel.current.classList.add('disabled');
        itemDop.current.classList.add('disabled');
        itemItog.current.classList.add('disabled');
        itemMap.current.classList.add('nav-item__active');
        contentLocation.current.style.display = 'block';
        modelInner.current.style.display = 'none';
        btnModel.current.style.display = 'block';
        btnDop.current.style.display = 'none';
    }

    aClickModel () {
        itemModel.current.classList.remove('nav-item__continue');
        itemDop.current.classList.remove('nav-item__active');
        itemModel.current.classList.add('nav-item__active');
        itemItog.current.classList.add('disabled');
        itemDop.current.classList.add('disabled');
        itemMap.current.classList.remove('disabled');
        modelInner.current.style.display = 'block';
        dopInner.current.style.display = 'none';
        btnDop.current.style.display = 'block';
        btnItog.current.style.display = 'none';
    }

    aClickDop () {
        itemDop.current.classList.remove('nav-item__continue');
        itemItog.current.classList.remove('nav-item__active');
        itemDop.current.classList.add('nav-item__active');
        itemModel.current.classList.remove('disabled');
        itemItog.current.classList.add('disabled');
        itemMap.current.classList.add('disabled');
        dopInner.current.style.display = 'block';
        totalInner.current.style.display = 'none';
        btnItog.current.style.display = 'block';
        btnTotal.current.style.display = 'none';
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
                        nav={nav}
                        orderEnd={orderEnd}
                        aClickMap={this.aClickMap}
                        aClickModel={this.aClickModel}
                        aClickDop={this.aClickDop}
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
                            textOrder={textOrder}
                        />
                        <ModalWindow 
                            modalWindow={modalWindow}
                            btnAccept={btnAccept}
                            btnReturn={btnReturn}
                            btnClickAccept={this.btnClickAccept}
                            btnClickReturn={this.btnClickReturn}
                        />
                        <OrderZone 
                            city={this.state.city}
                            street={this.state.street}
                            btnClickModel={this.btnClickModel}
                            btnClickDop={this.btnClickDop}
                            btnClickItog={this.btnClickItog}
                            btnClickTotal={this.btnClickTotal}
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