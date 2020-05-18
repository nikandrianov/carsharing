import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddTarif extends Component {
    render() {
        if (!this.props.tarif) {
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
                <p className="item-order__text">{this.props.tarif.title}</p>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        tarif: state.tarifselect
    }
}

export default connect(mapStateToProps)(AddTarif);