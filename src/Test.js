import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllCars } from './components/actions/index';

class Test extends Component {

    componentDidMount() {
        this.props.getAllCars()
    }

    render() {
        console.log(this.props);
        return (
            <div>
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        allcars: state.allcars
    }
}

function mapDispatchToProps (dispatch) {
    return {
        getAllCars: bindActionCreators(getAllCars, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);