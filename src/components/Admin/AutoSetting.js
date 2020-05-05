import React from 'react';

class AutoSetting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [
                {
                    id: 1,
                    title: "Красный",
                    color: "red"
                },
                {
                    id: 2,
                    title: "Белый",
                    color: "white"
                },
                {
                    id: 3,
                    title: "Черный",
                    color: "black"
                }
            ]
        }
    }
    render() {
        return (
            <div className="setting">
                <h1>Настройки автомобиля</h1>
                <div className="item-setting item-setting__top">
                    <div className="item-setting_style">
                        <label>Модель автомобиля</label>
                        <input type="text" className="item-setting__model" />
                    </div>
                    <div className="item-setting_margin item-setting_style">
                        <label>Тип автомобиля</label>
                        <input type="text" className="item-setting__type" />
                    </div>
                </div>
                <div className="item-setting item-setting__bot">
                    <div className="item-setting_style">
                        <label>Доступные цвета</label>
                        <input type="text" className="item-setting__colors" />
                    </div>
                    <button className="btn item-setting_btnplus">
                        <span></span>
                    </button>
                </div>
                <div className="item-setting item-setting__checkbox">
                    {this.state.colors.map( (item, index) => (
                        <div className="item-setting__chkcontrol" key={index}>
                            <label><input type="checkbox" defaultChecked />{item.title}</label>
                        </div>
                    ) )}
                </div>
                <div className="btn-setting">
                    <div className="btn-setting__control">
                        <button className="btn btn-setting_default btn-primary">Сохранить</button>
                        <button className="btn btn-setting_default btn-setting__cancel">Отменить</button>
                    </div>
                    <div className="btn-setting__delete">
                        <button className="btn btn-setting_default btn-danger">Удалить</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AutoSetting;