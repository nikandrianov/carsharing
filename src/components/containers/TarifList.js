import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { tarifSelect } from '../actions/index';
import { getAllTarif } from '../actions/index';

class TarifList extends Component {

    componentDidMount() {
        this.props.getAllTarif();
    }

    showList () {
        return this.props.alltarifs.map( (item) => (
        <li key={item.id} onClick={() => this.props.tarifSelect(item)}><span></span>{item.rateTypeId.name}, {item.price} ₽/{item.rateTypeId.unit}</li>)
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
        tarifs: state.tarifs,
        alltarifs: state.alltarifs
    }
}

function mapDispatchToProps (dispatch) {
    return {
        tarifSelect: bindActionCreators(tarifSelect, dispatch),
        getAllTarif: bindActionCreators(getAllTarif, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TarifList);