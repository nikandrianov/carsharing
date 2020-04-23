import React from 'react';

import x from '../../assets/image/x.svg';

class Additiontal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [
                {
                    title: "Любой",
                    func: "random"
                },
                {
                    title: "Красный",
                    func: "red"
                },
                {
                    title: "Голубой",
                    func: "blue"
                }
            ]
        }
    }
    render() {
        return (
            <div className="dop__inner" ref={this.props.dopInner}>
                <div className="options">
                    <h4 className="title">Цвет</h4>
                    <div className="options-colors">
                        <ul className="colors-item">
                            {Object.keys(this.state.colors).map((item) => (
                                <li className={`colors-li-${this.state.colors[item].func}`} key={item}><span className={`colors-span-${this.state.colors[item].func}`}></span>{this.state.colors[item].title}</li>
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
                            <input className="rent-input" type="text" name="start-rent" placeholder="Введите дату и время" />
                            <img src={ x } alt="x" name="start-rent" />
                        </div>
                        <div className="form-rent__date">
                            <label>По</label>
                            <input className="rent-input" type="text" name="end-rent" placeholder="Введите дату и время" />
                            <img src={ x } alt="x" name="end-rent" />
                        </div>
                    </form>
                    <h4 className="title">Тариф</h4>
                    <div className="tarif">
                        <ul className="tarif-item">
                            <li className="tarif-li-minut"><span className="tarif-span-minut"></span>Поминутно, 7₽/мин</li>
                            <li className="tarif-li-days"><span className="tarif-span-days"></span>На сутки, 1999 ₽/сутки</li>
                        </ul>
                    </div>
                    <h4 className="title">Доп услуги</h4>
                    <div className="services">
                        <div className="services-item">
                            <label><input type="checkbox" name="petrol" id="petrol" />Полный бак, 500р</label>
                        </div>
                        <div className="services-item">
                            <label><input type="checkbox" name="child-armchair" id="child-armchair" />Детское кресло, 200р</label>
                        </div>
                        <div className="services-item">
                            <label><input type="checkbox" name="right-steering-wheel" id="right-steering-wheel" />Правый руль, 1600р</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Additiontal;