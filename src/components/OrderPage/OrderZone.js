import React from 'react';

class OrderZone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="order">
                <div className="order__inner">
                    <h4>Ваш заказ:</h4>
                    <div className="item-order item-order__point">
                        <p>Пункт выдачи</p>
                        <p>......................</p>
                        <div className="item-order__location">
                            <p>{this.props.city}</p>
                            <p>{this.props.street}</p>
                        </div>
                    </div>
                    <div className="item-order item-order__model" ref={this.props.textCar}>
                        <p>Модель</p>
                        <p>.....................................</p>
                        <p className="item-order__text text-uppercase">{this.props.model}</p>
                    </div>
                    <div className="item-order item-order__color" ref={this.props.textColor}>
                        <p>Цвет</p>
                        <p>..............................................</p>
                        <p className="item-order__text">{this.props.color}</p>
                    </div>
                    <div className="item-order item-order__rent">
                        <p>Длительность аренды</p>
                        <p className="item-order__text"></p>
                    </div>
                    <div className="item-order item-order__tarif" ref={this.props.textTarif}>
                        <p>Тариф</p>
                        <p>.....................</p>
                        <p className="item-order__text">{this.props.tarifs}</p>
                    </div>
                    <div className="item-order item-order__petrol" ref={this.props.textPetrol}>
                        <p>Полный бак</p>
                        <p>......................................</p>
                        <p className="item-order__text">{this.props.petrol}</p>
                    </div>
                    <div className="item-order item-order__child" ref={this.props.textChild}>
                        <p>Детское кресло</p>
                        <p>.....................................</p>
                        <p className="item-order__text">{this.props.child}</p>
                    </div>
                    <div className="item-order item-order__right" ref={this.props.textRight}>
                        <p>Правый руль</p>
                        <p>......................................</p>
                        <p className="item-order__text">{this.props.wheel}</p>
                    </div>
                    <p className="order__price">Цена: от 8000 до 12000 ₽</p>
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