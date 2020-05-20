import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddModel extends Component {
    render() {
        if (!this.props.order) {
            return (
            <div className="item-order item-order__model">
                <p>Модель</p>
                <p>............</p>
                <p className="item-order__text text-uppercase"></p>
            </div>
            )
        }
        return (
            <div className="item-order item-order__model" style={{ display: "flex"}}>
                <p>Модель</p>
                <p>.............</p>
                <p className="item-order__text text-uppercase">{this.props.order.car.name}</p>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        order: state.order
    }
}

export default connect(mapStateToProps)(AddModel);