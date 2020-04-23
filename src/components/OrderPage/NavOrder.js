import React from 'react';

import vector from '../../assets/image/Vector_order_page.svg';

class NavOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            links: [
                {
                    id: 1,
                    title: "Местоположение",
                    role: "nav-item__active",
                    refname: this.props.itemMap
                },
                {
                    id: 2,
                    title: "Модель",
                    role: "disabled",
                    refname: this.props.itemModel
                },
                {
                    id: 3,
                    title: "Дополнительно",
                    role: "disabled",
                    refname: this.props.itemDop
                },
            ]
        }
    }
    render() {
        return (
            <div>
                <nav className="nav">
                    {Object.keys(this.state.links).map((item) => (
                        <li key={item} className={`nav-item ${this.state.links[item].role}`} ref={this.state.links[item].refname}>
                            {this.state.links[item].title}
                            <img src={ vector } alt="Vector_order_page" />
                        </li>
                        )
                    )}
                    {/* <li className="nav-item item-model disabled">
                        Модель
                        <img src={ vector} alt="Vector_order_page" />
                    </li>
                    <li className="nav-item item-dop disabled">
                        Дополнительно
                        <img src={ vector} alt="Vector_order_page" />
                    </li> */}
                    <li className="nav-item disabled" ref={this.props.itemItog}>
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