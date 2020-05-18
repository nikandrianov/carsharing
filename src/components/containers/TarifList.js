import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { tarifSelect } from '../actions/index';

class TarifList extends Component {
    showList () {
        return this.props.tarifs.map( (item) => (
            <li key={item.id} onClick={() => this.props.tarifSelect(item)}><span></span>{item.title}</li>)
        )
    }
    render() {
        return (
            <div>
                <h4 className="dop__options title">Тариф</h4>
                <div className="tarif">
                    <ul className="tarif-item">
                        {this.showList()}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        tarifs: state.tarifs
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({tarifSelect: tarifSelect}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TarifList);