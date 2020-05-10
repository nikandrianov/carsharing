import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCar } from '../actions/selectcar';

class CarList extends Component {
    showList () {
        return this.props.cars.map( (item) => (
            <div className="card" key={item.id}>
                <div className="card-body" onClick={() => this.props.selectCar(item)}>
                    <h5 className="card-title text-uppercase">{item.name}</h5>
                    <h6 className="card-subtitle">{item.pricemin} - {item.pricemax} ₽</h6>
                    <img className="card-img-bottom" src={item.src} alt={item.name}/>
                </div>
            </div>
        ))
    }
    render() {
        return (
            <div className="model__list">
                {this.showList ()}
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        cars: state.cars
    }
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({selectCar: selectCar}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(CarList);