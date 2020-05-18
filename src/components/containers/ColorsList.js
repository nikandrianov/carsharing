import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { colorsSelect } from '../actions/index';

class ColorsList extends Component {
    showList () {
        return this.props.colors.map( (item) => (
            <li className={`colors-li-${item.color}`} key={item.id} onClick={() => this.props.colorsSelect(item)}><span className={`colors-span-${item.color} ${item.active}`}></span>{item.title}</li>
        ))
    }
    render() {
        return (
            <div>
                <h4 className="dop__options title">Цвет</h4>
                <div className="options-colors">
                    <ul className="colors-item">
                        {this.showList()}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        colors: state.colors
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({colorsSelect: colorsSelect}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorsList);