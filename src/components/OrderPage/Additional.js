import React from 'react';

import x from '../../assets/image/x.svg';

class Additiontal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="dop" ref={this.props.dopInner}>
                <div className="dop__options">
                    <h4 className="dop__options title">Цвет</h4>
                    <div className="options-colors">
                        <ul className="colors-item">
                            {this.props.colors.map( (item, index) => (
                                <li className={`colors-li-${item.color}`} key={index} onClick={this.props.addColor.bind(this, item.title)}><span className={`colors-span-${item.color} ${item.active}`}></span>{item.title}</li>
                                )
                            )}
                        </ul>
                    </div>
                    <h4 className="dop__options title">Дата аренды</h4>
                    <form className="form-rent">
                        <div className="form-rent__date">
                            <label>C</label>
                            <input className="form-rent__input" type="datetime-local" name="start-rent" placeholder="Введите дату и время" />
                            <img src={ x } alt="x"/>
                        </div>
                        <div className="form-rent__date">
                            <label>По</label>
                            <input className="form-rent__input" type="datetime-local" name="end-rent" placeholder="Введите дату и время" />
                            <img src={ x } alt="x"/>
                        </div>
                    </form>
                    <h4 className="dop__options title">Тариф</h4>
                    <div className="tarif">
                        <ul className="tarif-item">
                            {this.props.tarif.map( (item, index) => <li key={index} onClick={this.props.addTarif.bind(this, item.title)}><span></span>{item.title}</li>)}
                        </ul>
                    </div>
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