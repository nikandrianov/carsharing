import React from 'react';
import ColorsList from '../containers/ColorsList';
import TarifList from '../containers/TarifList';
import DateList from '../containers/DateList';

class Additiontal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="dop" ref={this.props.dopInner}>
                <div className="dop__options">
                    <ColorsList />
                    <DateList />
                    <TarifList />
                    <h4 className="dop__options title">Доп услуги</h4>
                    <div className="services">
                        {this.props.services.map ( (item, index) => (
                            <div className="services-item" key={index}>
                                <label onChange={this.props.addCheckbox.bind(this, item.title)}><input type="checkbox" />{item.title}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Additiontal;