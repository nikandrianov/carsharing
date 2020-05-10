import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddModel extends Component {
    render() {
        if (!this.props.car) {
            return (
            <div className="item-order item-order__model">
                <p>Модель</p>
                <p>.....................................</p>
                <p className="item-order__text text-uppercase"></p>
            </div>
            )
        }
        return (
            <div className="item-order item-order__model">
                <p>Модель</p>
                <p>.....................................</p>
                <p className="item-order__text text-uppercase">{this.props.car.name}</p>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        car: state.select
    }
}

export default connect(mapStateToProps)(AddModel);