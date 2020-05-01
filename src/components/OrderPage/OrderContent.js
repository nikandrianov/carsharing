import React from 'react';

import NavOrder from './NavOrder';
import MapLocation from './MapLocation';
import Models from './Models';
import Additiontal from './Additional';
import Total from './Total';
import ModalWindow from './ModalWindow';
import OrderZone from './OrderZone';

import elantra from '../../assets/image/cars/elantra.png';
import creta from '../../assets/image/cars/creta.png';
import i30 from '../../assets/image/cars/i30n.png';
import sonata from '../../assets/image/cars/sonata.png';

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
let textCar = React.createRef();
let textColor = React.createRef();
let textTarif = React.createRef();
let textPetrol = React.createRef();
let textChild = React.createRef();
let textRight = React.createRef();

class OrderContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            street: "",
            model: "",
            color: "Любой",
            tarifs: "",
            petrol: "",
            child: "",
            wheel: "",
            checkbox: true,
            cars: [
                {
                    id: 1,
                    name: "elantra",
                    price: "12 000 - 25 000 ₽",
                    filterprice: 25000,
                    src: elantra
                },
                {
                    id: 2,
                    name: "creta",
                    price: "10 000 - 32 000 ₽",
                    filterprice: 32000,
                    src: creta
                },
                {
                    id: 3,
                    name: "i30 N",
                    price: "12 000 - 25 000 ₽",
                    filterprice: 25000,
                    src: i30
                },
                {
                    id: 4,
                    name: "sonata",
                    price: "10 000 - 32 000 ₽",
                    filterprice: 32000,
                    src: sonata
                }
            ],
            filter: [
                {
                    title: "Все модели",
                    name: "model",
                    active: "span__active"
                },
                {
                    title: "Эконом",
                    name: "eko",
                    active: ""
                },
                {
                    title: "Премиум",
                    name: "premium",
                    active: ""
                }
            ],
            colors: [
                {
                    title: "Любой",
                    color: "random",
                    active: "span__active"
                },
                {
                    title: "Красный",
                    color: "red",
                    active: ""
                },
                {
                    title: "Голубой",
                    color: "blue",
                    active: ""
                }
            ],
            tarif: [
                {
                    title: "Поминутно, 7₽/мин"
                },
                {
                    title: "На сутки, 1999 ₽/сутки"
                }
            ],
            services: [
                {
                    title: "Полный бак, 500р"
                },
                {
                    title: "Детское кресло, 200р"
                },
                {
                    title: "Правый руль, 1600р"
                },
            ]
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
        this.addCar = this.addCar.bind(this);
        this.addColor = this.addColor.bind(this);
        this.addTarif = this.addTarif.bind(this);
        this.addCheckbox = this.addCheckbox.bind(this);
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
        itemMap.current.classList.remove('item-nav_active');
        itemMap.current.classList.add('nav-item__continue');
        itemModel.current.classList.add('item-nav_active');
        itemModel.current.classList.remove('item-nav_disabled');
    }

    btnClickDop () {
        modelInner.current.style.display = 'none';
        dopInner.current.style.display = 'block';
        itemModel.current.classList.remove('item-nav_active');
        itemMap.current.classList.add('nav-item__continue');
        itemModel.current.classList.add('nav-item__continue');
        itemDop.current.classList.add('item-nav_active');
        itemMap.current.classList.add('item-nav_disabled');
        itemDop.current.classList.remove('item-nav_disabled');
        btnDop.current.style.display = 'none';
        btnItog.current.style.display = 'block';
        textColor.current.style.display = 'flex';
    }

    btnClickItog () {
        dopInner.current.style.display = 'none';
        totalInner.current.style.display = 'block';
        itemDop.current.classList.remove('item-nav_active');
        itemMap.current.classList.add('nav-item__continue');
        itemModel.current.classList.add('nav-item__continue');
        itemDop.current.classList.add('nav-item__continue');
        itemItog.current.classList.add('item-nav_active');
        itemDop.current.classList.remove('item-nav_disabled');
        itemItog.current.classList.remove('item-nav_disabled');
        itemMap.current.classList.add('item-nav_disabled');
        itemModel.current.classList.add('item-nav_disabled');
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
        itemModel.current.classList.remove('item-nav_active');
        itemModel.current.classList.add('item-nav_disabled');
        itemDop.current.classList.add('item-nav_disabled');
        itemItog.current.classList.add('item-nav_disabled');
        itemMap.current.classList.add('item-nav_active');
        contentLocation.current.style.display = 'block';
        modelInner.current.style.display = 'none';
        btnModel.current.style.display = 'block';
        btnDop.current.style.display = 'none';
    }

    aClickModel () {
        itemModel.current.classList.remove('nav-item__continue');
        itemDop.current.classList.remove('item-nav_active');
        itemModel.current.classList.add('item-nav_active');
        itemItog.current.classList.add('item-nav_disabled');
        itemDop.current.classList.add('item-nav_disabled');
        itemMap.current.classList.remove('item-nav_disabled');
        modelInner.current.style.display = 'block';
        dopInner.current.style.display = 'none';
        btnDop.current.style.display = 'block';
        btnItog.current.style.display = 'none';
    }

    aClickDop () {
        itemDop.current.classList.remove('nav-item__continue');
        itemItog.current.classList.remove('item-nav_active');
        itemDop.current.classList.add('item-nav_active');
        itemModel.current.classList.remove('item-nav_disabled');
        itemItog.current.classList.add('item-nav_disabled');
        itemMap.current.classList.add('item-nav_disabled');
        dopInner.current.style.display = 'block';
        totalInner.current.style.display = 'none';
        btnItog.current.style.display = 'block';
        btnTotal.current.style.display = 'none';
    }

    addCar (name) {
        textCar.current.style.display = 'flex';
        this.setState({ model: name});
    }

    addColor (color) {
        this.setState({ color: color});
    }

    addTarif (e) {
        textTarif.current.style.display = 'flex';
        this.setState({ tarifs: e});
    }

    addCheckbox (e) {
        console.log(this.state.checkbox);
        if ( e === "Полный бак, 500р") {
            textPetrol.current.style.display = 'flex';
            if ( this.state.checkbox ) {
                this.setState({ petrol: "Да", checkbox: !this.state.checkbox});
            }
            else {
                textPetrol.current.style.display = 'none';
                this.setState({ petrol: "", checkbox: !this.state.checkbox});
            }
        }
        else if (e === "Детское кресло, 200р") {
            textChild.current.style.display = 'flex';
            if ( this.state.checkbox ) {
                this.setState({ child: "Да", checkbox: !this.state.checkbox});
            }
            else {
                textChild.current.style.display = 'none';
                this.setState({ child: "", checkbox: !this.state.checkbox});
            }
        }
        else if (e === "Правый руль, 1600р") {
            textRight.current.style.display = 'flex';
            if ( this.state.checkbox ) {
                this.setState({ wheel: "Да", checkbox: !this.state.checkbox});
            }
            else {
                textRight.current.style.display = 'none';
                this.setState({ wheel: "", checkbox: !this.state.checkbox});
            }
        }
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
                    <div className="main__order">
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
                            cars={this.state.cars}
                            filter={this.state.filter}
                            modelInner={modelInner}
                            addCar={this.addCar}
                        />
                        <Additiontal 
                            colors={this.state.colors}
                            tarif={this.state.tarif}
                            services={this.state.services}
                            dopInner={dopInner}
                            addColor={this.addColor}
                            addTarif={this.addTarif}
                            addCheckbox={this.addCheckbox}
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
                            model={this.state.model}
                            color={this.state.color}
                            tarifs={this.state.tarifs}
                            petrol={this.state.petrol}
                            child={this.state.child}
                            wheel={this.state.wheel}
                            btnClickModel={this.btnClickModel}
                            btnClickDop={this.btnClickDop}
                            btnClickItog={this.btnClickItog}
                            btnClickTotal={this.btnClickTotal}
                            btnModel={btnModel}
                            btnDop={btnDop}
                            btnItog={btnItog}
                            btnTotal={btnTotal}
                            btnCancel={btnCancel}
                            textCar={textCar}
                            textColor={textColor}
                            textTarif={textTarif}
                            textPetrol={textPetrol}
                            textChild={textChild}
                            textRight={textRight}
                        />
                    </div>
                </div>
            </main>
        )
    }
}

export default OrderContent;