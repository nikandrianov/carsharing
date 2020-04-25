import React from 'react';

import elantra from '../../assets/image/cars/elantra.png';
import creta from '../../assets/image/cars/creta.png';
import i30 from '../../assets/image/cars/i30n.png';
import sonata from '../../assets/image/cars/sonata.png';

class Models extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [
                {
                    id: 1,
                    name: "elantra",
                    price: "12 000 - 25 000 ₽",
                    pricefilter: 25000,
                    src: elantra
                },
                {
                    id: 2,
                    name: "creta",
                    price: "10 000 - 32 000 ₽",
                    pricefilter: 32000,
                    src: creta
                },
                {
                    id: 3,
                    name: "i30 N",
                    price: "12 000 - 25 000 ₽",
                    pricefilter: 25000,
                    src: i30
                },
                {
                    id: 4,
                    name: "sonata",
                    price: "10 000 - 32 000 ₽",
                    pricefilter: 32000,
                    src: sonata
                }
            ],
            filter: [
                {
                    title: "Модель",
                    name: "model",
                    active: ""
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
            ]
        }

        this.filterClick = this.filterClick.bind(this);
    }

    filterClick () {
        this.setState ({

        })
    }

    render() {
        return (
            <div className="model__inner" ref={this.props.modelInner}>
                <div className="model-item">
                    <ul className="model-control">
                        {Object.keys(this.state.filter).map((item) => (
                            <li className={`colors-li-${this.state.filter[item].name}`} key={item} onClick={this.filterClick}><span className={`colors-span-${this.state.filter[item].name} ${this.state.filter[item].active}`}></span>{this.state.filter[item].title}</li>
                            )
                        )}
                        {/* <li className="control-li-model"><span className="control-span-model span__active"></span>Модели</li>
                        <li className="control-li-eko"><span className="control-span-eko"></span>Эконом</li>
                        <li className="control-li-premium"><span className="control-span-premium"></span>Премиум</li> */}
                    </ul>
                    <div className="model-list">
                        {Object.keys(this.state.cars).map((keyName) => (
                            <div className="card">
                                <div className="card-body" key={keyName.id}>
                                    <h5 className="card-title text-uppercase">{this.state.cars[keyName].name}</h5>
                                    <h6 className="card-subtitle">{this.state.cars[keyName].price}</h6>
                                    <img className="card-img-bottom" src={ this.state.cars[keyName].src } alt={this.state.cars[keyName].name} />
                                </div>
                            </div>
                            ) 
                        )}
                        {/* <div className="card model-1">
                            <div className="card-body">
                                <h5 className="card-title text-uppercase elantra">Elantra</h5>
                                <h6 className="card-subtitle">12 000 - 25 000 ₽</h6>
                                <img className="card-img-bottom" src={ elantra } alt="elantra" />
                            </div>
                        </div>
                        <div className="card model-2">
                            <div className="card-body">
                                <h5 className="card-title i30n">i30 N</h5>
                                <h6 className="card-subtitle">10 000 - 32 000 ₽</h6>
                                <img className="card-img-bottom" src={ i30 } alt="i30n" />
                            </div>
                        </div>
                        <div className="card model-3">
                            <div className="card-body">
                                <h5 className="card-title text-uppercase creta">Creta</h5>
                                <h6 className="card-subtitle">12 000 - 25 000 ₽</h6>
                                <img className="card-img-bottom" src={ creta } alt="creta" />
                            </div>
                        </div>
                        <div className="card model-4">
                            <div className="card-body">
                                <h5 className="card-title text-uppercase sonata">Sonata</h5>
                                <h6 className="card-subtitle">10 000 - 32 000 ₽</h6>
                                <img className="card-img-bottom" src={ sonata } alt="sonata" />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Models;