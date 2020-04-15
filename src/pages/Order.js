import React from 'react';
import Menu from '../components/Menu';
import HeaderOrder from '../components/OrderPage/HeaderOrder';
import OrderContent from '../components/OrderPage/OrderContent';

class Order extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container__inner">
                    <div className="container__item">
                        <Menu />
                        <div className="container-fluid">
                            <HeaderOrder />
                            <OrderContent />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Order;