import React from 'react';
import CarList from '../containers/CarList';
import FilterCarList from '../containers/FilterCarList';

class Models extends React.Component {
    render() {
        return (
            <div className="model" ref={this.props.modelInner}>
                <div className="model__inner">
                    <FilterCarList />
                    <CarList />
                </div>
            </div>
        )
    }
}

export default Models;