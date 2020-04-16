import React from 'react';

class AutoSetting extends React.Component {
    render() {
        return (
            <div className="car-setting">
                <h1>Настройки автомобиля</h1>
                <div className="car-setting__inner item-top">
                    <div className="car-setting__item">
                        <label for="car-setting_model">Модель автомобиля</label>
                        <input type="text" id="car-setting_model" />
                    </div>
                    <div className="car-setting__item type-margin">
                        <label for="car-setting_type">Тип автомобиля</label>
                        <input type="text" id="car-setting_type" />
                    </div>
                </div>
                <div className="car-setting__inner item-bot">
                    <div className="car-setting__item">
                        <label for="car-setting_colors">Доступные цвета</label>
                        <input type="text" id="car-setting_colors" />
                    </div>
                    <button className="btn colors-plus">
                        <span></span>
                    </button>
                </div>
                <div className="clr-checkbox">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="defaultChecked1" checked />
                        <label className="custom-control-label" for="defaultChecked1">Красный</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="defaultChecked2" checked />
                        <label className="custom-control-label" for="defaultChecked2">Белый</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="defaultChecked3" checked />
                        <label className="custom-control-label" for="defaultChecked3">Черный</label>
                    </div>
                </div>
                <div className="btn-setting">
                    <div className="btn-setting__control">
                        <button className="btn btn-default btn-primary control-save">Сохранить</button>
                        <button className="btn btn-default control-cancel">Отменить</button>
                    </div>
                    <div className="btn-setting__delete">
                        <button className="btn btn-default btn-danger control-delete">Удалить</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AutoSetting;