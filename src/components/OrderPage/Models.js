import React from 'react';



class Models extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: props.cars,
            filter: props.filter,
        }
    }

    filterEko (name) {
        if ( name === "eko") {
            const filtercar = this.props.cars.filter( item => item.filterprice < 32000);
            this.setState({ cars: filtercar});
        }
        else if ( name === "model") {
            this.setState({ cars: this.props.cars, actived: "span__active" });
        }
        else if ( name === "premium") {
            const filtercar = this.props.cars.filter( item => item.filterprice >= 32000);
            this.setState({ cars: filtercar});
        }
        else return this.setState({ cars: this.props.cars });
    }

    render() {
        return (
            <div className="model__inner" ref={this.props.modelInner}>
                <div className="model-item">
                    <ul className="model-control">
                        {Object.keys(this.state.filter).map((item) => (
                            <li className={`colors-li-${this.state.filter[item].name}`} key={item} onClick={this.filterEko.bind(this, this.state.filter[item].name)}><span className={`colors-span-${this.state.filter[item].name} ${this.state.filter[item].active}`}></span>{this.state.filter[item].title}</li>
                            )
                        )}
                        {/* <li className="control-li-model"><span className="control-span-model span__active"></span>Модели</li>
                        <li className="control-li-eko"><span className="control-span-eko"></span>Эконом</li>
                        <li className="control-li-premium"><span className="control-span-premium"></span>Премиум</li> */}
                    </ul>
                    <div className="model-list">
                        {Object.keys(this.state.cars).map((keyName, index) => (
                            <div className="card"  key={index}>
                                <div className="card-body" onClick={this.props.addCar.bind(this, this.state.cars[keyName].name)}>
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