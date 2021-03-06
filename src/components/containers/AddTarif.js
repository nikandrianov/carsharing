import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddTarif extends Component {
    render() {
        if (!this.props.order.tarif.rateTypeId) {
            return (
                <div className="item-order item-order__tarif">
                    <p>Тариф</p>
                    <p>.....................</p>
                    <p className="item-order__text"></p>
                </div>
            )
        }
        return (
            <div className="item-order item-order__tarif" style={{ display: "flex"}}>
                <p>Тариф</p>
                <p>.....................</p>
                <p className="item-order__text">{this.props.order.tarif.rateTypeId.name}, {this.props.order.tarif.price} ₽/{this.props.order.tarif.rateTypeId.unit}</p>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        order: state.order
    }
}

export default connect(mapStateToProps)(AddTarif);