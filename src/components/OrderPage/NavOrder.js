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
                    refname: this.props.itemMap,
                    try: this.props.aClickMap
                },
                {
                    id: 2,
                    title: "Модель",
                    role: "disabled",
                    refname: this.props.itemModel,
                    try: this.props.aClickModel
                },
                {
                    id: 3,
                    title: "Дополнительно",
                    role: "disabled",
                    refname: this.props.itemDop,
                    try: this.props.aClickDop
                },
            ]
        }
    }
    render() {
        return (
            <div>
                <nav className="nav" ref={this.props.nav}>
                    {Object.keys(this.state.links).map((item) => (
                        <li key={item} className={`nav-item ${this.state.links[item].role}`} ref={this.state.links[item].refname} onClick={this.state.links[item].try}>
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
                <nav className="nav order-end" ref={this.props.orderEnd}>
                    <p>Заказ номер RU58491823</p>
                </nav>
            </div>
        )
    }
}

export default  NavOrder;