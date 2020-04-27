import React from 'react';

class OrderZone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
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
                    <div className="order__item order-model" ref={this.props.textCar}>
                        <p>Модель</p>
                        <p>.....................................</p>
                        <p className="model-text text-car text-uppercase">{this.props.model}</p>
                    </div>
                    <div className="order__item order-color" ref={this.props.textColor}>
                        <p>Цвет</p>
                        <p>..............................................</p>
                        <p className="model-text text-color">{this.props.color}</p>
                    </div>
                    <div className="order__item order-rent">
                        <p>Длительность аренды</p>
                        <p className="model-text"></p>
                    </div>
                    <div className="order__item order-tarif" ref={this.props.textTarif}>
                        <p>Тариф</p>
                        <p>.....................</p>
                        <p className="model-text text-tarif">{this.props.tarifs}</p>
                    </div>
                    <div className="order__item order-petrol" ref={this.props.textPetrol}>
                        <p>Полный бак</p>
                        <p>......................................</p>
                        <p className="model-text text-petrol">{this.props.petrol}</p>
                    </div>
                    <div className="order__item order-child" ref={this.props.textChild}>
                        <p>Детское кресло</p>
                        <p>.....................................</p>
                        <p className="model-text text-child">{this.props.child}</p>
                    </div>
                    <div className="order__item order-right" ref={this.props.textRight}>
                        <p>Правый руль</p>
                        <p>......................................</p>
                        <p className="model-text text-right">{this.props.wheel}</p>
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