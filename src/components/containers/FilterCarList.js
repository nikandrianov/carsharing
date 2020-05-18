import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterSelect } from '../actions/index';

class FilterCarList extends Component {
    showList () {
        return this.props.filtercar.map( (item) => (
            <li className={`colors-li-${item.name}`} key={item.id} onClick={() => this.props.filterSelect(item)}><span className={`colors-span-${item.name} ${item.active}`}></span>{item.title}</li>
        ))
    }
    render() {
        return (
            <ul className="model__control">
                {this.showList()}
            </ul>
        )
    }
}

function mapStateToProps (state) {
    return {
        filtercar: state.filtercar
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({filterSelect: filterSelect}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterCarList);