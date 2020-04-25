import React from 'react';

class OrderZone extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="content__order">
                <div className="order">
                    <h4>Ваш заказ:</h4>
                    <div className="order__item">
                        <p>Пункт выдачи</p>
                        <p>......................</p>
                        <div className="order__item-location">
                            <p className="location-text-city">{this.props.city}</p>
                            <p className="location-text-street">{this.props.street}</p>
                        </div>
                    </div>
                    <div className="order__item order-model">
                        <p>Модель</p>
                        <p>.....................................</p>
                        <p className="model-text text-car"></p>
                    </div>
                    <div className="order__item order-color">
                        <p>Цвет</p>
                        <p>.....................................................</p>
                        <p className="model-text text-color"></p>
                    </div>
                    <div className="order__item order-rent">
                        <p>Длительность аренды</p>
                        <p className="model-text">1 д 2 ч</p>
                    </div>
                    <div className="order__item order-tarif">
                        <p>Тариф</p>
                        <p>.....................</p>
                        <p className="model-text text-tarif">На сутки</p>
                    </div>
                    <div className="order__item order-petrol">
                        <p>Полный бак</p>
                        <p>......................................</p>
                        <p className="model-text text-petrol"></p>
                    </div>
                    <div className="order__item order-child">
                        <p>Детское кресло</p>
                        <p>.....................................</p>
                        <p className="model-text text-child"></p>
                    </div>
                    <div className="order__item order-right">
                        <p>Правый руль</p>
                        <p>......................................</p>
                        <p className="model-text text-right"></p>
                    </div>
                    <p className="price">Цена: от 8000 до 12000 ₽</p>
                    <button className="btn btn-model" ref={this.props.btnModel} onClick={this.props.btnClickModel}>Выбрать модель</button>
                    <button className="btn btn-dop" ref={this.props.btnDop} onClick={this.props.btnClickDop}>Дополнительно</button>
                    <button className="btn btn-itog" ref={this.props.btnItog} onClick={this.props.btnClickItog}>Итого</button>
                    <button className="btn btn-total" ref={this.props.btnTotal} onClick={this.props.btnClickTotal}>Заказать</button>
                    <button className="btn btn-cancel" ref={this.props.btnCancel}>Отменить</button>
                </div>
            </div>
        )
    }
}

export default OrderZone;