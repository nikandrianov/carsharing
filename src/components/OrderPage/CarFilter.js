import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCar } from '../actions/index';

class CarFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="card">
                <div className="card-body" onClick={() => this.props.selectCar(this.props.item)}>
                    <h5 className="card-title text-uppercase">{this.props.item.name}</h5>
                    <h6 className="card-subtitle">{this.props.item.priceMin} - {this.props.item.priceMax} ₽</h6>
                    <img className="card-img-bottom" src={'http://api-factory.simbirsoft1.com/' + this.props.item.thumbnail.path} alt={this.props.item.name}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        order: state.order
    }
}

function matchDispatchToProps (dispatch) {
    return {
        selectCar: bindActionCreators(selectCar, dispatch)
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(CarFilter);