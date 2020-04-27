import React from 'react';

import x from '../../assets/image/x.svg';

class Additiontal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="dop__inner" ref={this.props.dopInner}>
                <div className="options">
                    <h4 className="title">Цвет</h4>
                    <div className="options-colors">
                        <ul className="colors-item">
                            {Object.keys(this.props.colors).map((item) => (
                                <li className={`colors-li-${this.props.colors[item].color}`} key={item} onClick={this.props.addColor.bind(this, this.props.colors[item].title)}><span className={`colors-span-${this.props.colors[item].color} ${this.props.colors[item].active}`}></span>{this.props.colors[item].title}</li>
                                )
                            )}
                            {/* <li className="colors-li-random"><span className="colors-span-random"></span>Любой</li>
                            <li className="colors-li-red"><span className="colors-span-red"></span>Красный</li>
                            <li className="colors-li-blue"><span className="colors-span-blue"></span>Голубой</li> */}
                        </ul>
                    </div>
                    <h4 className="title">Дата аренды</h4>
                    <form className="form-rent">
                        <div className="form-rent__date">
                            <label>C</label>
                            <input className="rent-input" type="datetime-local" name="start-rent" placeholder="Введите дату и время" />
                            <img src={ x } alt="x"/>
                        </div>
                        <div className="form-rent__date">
                            <label>По</label>
                            <input className="rent-input" type="datetime-local" name="end-rent" placeholder="Введите дату и время" />
                            <img src={ x } alt="x"/>
                        </div>
                    </form>
                    <h4 className="title">Тариф</h4>
                    <div className="tarif">
                        <ul className="tarif-item">
                            {this.props.tarif.map( (item, index) => <li key={index} onClick={this.props.addTarif.bind(this, item.title)}><span></span>{item.title}</li>)}
                            {/* <li><span></span>На сутки, 1999 ₽/сутки</li> */}
                        </ul>
                    </div>
                    <h4 className="title">Доп услуги</h4>
                    <div className="services">
                        {Object.keys(this.props.services).map ( (item, index) => (
                            <div className="services-item" key={index}>
                                <label onChange={this.props.addCheckbox.bind(this, this.props.services[item].title)}><input type="checkbox" />{this.props.services[item].title}</label>
                            </div>
                        ))}
                        {/* <div className="services-item">
                            <label><input type="checkbox" />Полный бак, 500р</label>
                        </div>
                        <div className="services-item">
                            <label><input type="checkbox" />Детское кресло, 200р</label>
                        </div>
                        <div className="services-item">
                            <label><input type="checkbox" />Правый руль, 1600р</label>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Additiontal;