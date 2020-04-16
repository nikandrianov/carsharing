import React from 'react';

import vector from '../../assets/image/Vector_order_page.svg';

class NavOrder extends React.Component {
    render() {
        return (
            <div>
                <nav className="nav">
                    <li className="nav-item item-map nav-item__active">
                        Местоположение
                        <img src={ vector} alt="Vector_order_page" />
                    </li>
                    <li className="nav-item item-model disabled">
                        Модель
                        <img src={ vector} alt="Vector_order_page" />
                    </li>
                    <li className="nav-item item-dop disabled">
                        Дополнительно
                        <img src={ vector} alt="Vector_order_page" />
                    </li>
                    <li className="nav-item item-itog disabled">
                        Итого
                    </li>
                </nav>
                <nav className="nav order-end">
                    <p>Заказ номер RU58491823</p>
                </nav>
            </div>
        )
    }
}

export default  NavOrder;