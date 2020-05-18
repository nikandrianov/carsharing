import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import CarFilter from '../OrderPage/CarFilter';
import {getAllCars} from '../actions/index';

class CarList extends Component {
    componentDidMount() {
        this.props.getAllCars()
    }
    showList () {
        if (!this.props.filter) {
            return this.props.allcars.map( (item) => (
                <CarFilter item={item} key={item.id}/>
            ))
        }
        else if (this.props.filter.name === "eko") {
            const filtercar = this.props.allcars.filter( item => item.priceMax < 32000);
            return filtercar.map( (item) => (
                <CarFilter item={item} key={item.id}/>
            ))
        }
        else if (this.props.filter.name === "allmodel") {
            return this.props.allcars.map( (item) => (
                <CarFilter item={item} key={item.id}/>
            ))
        }
        else if (this.props.filter.name === "premium") {
            const filtercar = this.props.allcars.filter( item => item.priceMax >= 32000);
            return filtercar.map( (item) => (
                <CarFilter item={item} key={item.id}/>
            ))
        }
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
        cars: state.cars,
        filter: state.filterselect,
        allcars: state.allcars
    }
}

function mapDispatchToProps (dispatch) {
    return {
        getAllCars: bindActionCreators(getAllCars, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarList);