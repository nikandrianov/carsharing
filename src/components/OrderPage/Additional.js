import React from 'react';
import ColorsList from '../containers/ColorsList';

import x from '../../assets/image/x.svg';
import TarifList from '../containers/TarifList';

let data = new Date();

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
                    <h4 className="dop__options title">Дата аренды</h4>
                    <form className="form-rent">
                        <div className="form-rent__date">
                            <label>C</label>
                            <input className="form-rent__input" defaultValue={data} type="datelocal" name="start-rent" placeholder="Введите дату и время" />
                            <img src={ x } alt="x"/>
                        </div>
                        <div className="form-rent__date">
                            <label>По</label>
                            <input className="form-rent__input" type="datetime-local" name="end-rent" placeholder="Введите дату и время" />
                            <img src={ x } alt="x"/>
                        </div>
                    </form>
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