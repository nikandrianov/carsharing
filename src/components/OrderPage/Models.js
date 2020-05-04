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
            this.setState({ cars: this.props.cars});
        }
        else if ( name === "premium") {
            const filtercar = this.props.cars.filter( item => item.filterprice >= 32000);
            this.setState({ cars: filtercar});
        }
        else return this.setState({ cars: this.props.cars });
    }

    render() {
        return (
            <div className="model" ref={this.props.modelInner}>
                <div className="model__inner">
                    <ul className="model__control">
                        {this.state.filter.map( (item, index) => (
                            <li className={`colors-li-${item.name}`} key={index} onClick={this.filterEko.bind(this, item.name)}><span className={`colors-span-${item.name} ${item.active}`}></span>{item.title}</li>
                        ) )}
                    </ul>
                    <div className="model__list">
                        {this.state.cars.map( (item, index) => (
                            <div className="card" key={index}>
                                <div className="card-body" onClick={this.props.addCar.bind(this, item.name)}>
                                    <h5 className="card-title text-uppercase">{item.name}</h5>
                                    <h6 className="card-subtitle">{item.price}</h6>
                                    <img className="card-img-bottom" src={item.src} alt={item.name}/>
                                </div>
                            </div>
                        ) )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Models;