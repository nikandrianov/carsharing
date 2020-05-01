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
                    </div>
                </div>
            </div>
        )
    }
}

export default Models;