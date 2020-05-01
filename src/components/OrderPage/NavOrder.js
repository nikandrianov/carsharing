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
                    role: "item-nav_active",
                    refname: this.props.itemMap,
                    try: this.props.aClickMap
                },
                {
                    id: 2,
                    title: "Модель",
                    role: "item-nav_disabled",
                    refname: this.props.itemModel,
                    try: this.props.aClickModel
                },
                {
                    id: 3,
                    title: "Дополнительно",
                    role: "item-nav_disabled",
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
                    {this.state.links.map( (item, index) => (
                        <li key={index} className={`item-nav ${item.role}`} ref={item.refname} onClick={item.try}>{item.title}<img src={ vector } alt="Vector_order_page" /></li>
                    ))}
                    <li className="item-nav item-nav_disabled" ref={this.props.itemItog}>
                        Итого
                    </li>
                </nav>
                <nav className="nav nav__order" ref={this.props.orderEnd}>
                    <p>Заказ номер RU58491823</p>
                </nav>
            </div>
        )
    }
}

export default  NavOrder;