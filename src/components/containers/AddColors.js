import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddColors extends Component {
    render() {
        if (!this.props.order.color.title) {
            return (
                <div className="item-order item-order__color">
                    <p>Цвет</p>
                    <p>..............................................</p>
                    <p className="item-order__text"></p>
                </div>
            )
        }
        return (
            <div className="item-order item-order__color" style={{ display: "flex" }}>
                <p>Цвет</p>
                <p>..............................................</p>
                <p className="item-order__text">{this.props.order.color.title}</p>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        order: state.order
    }
}

export default connect(mapStateToProps)(AddColors);