import React from 'react';
import NavMobile from './NavMobile';

class MenuMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container__burger" ref={this.props.containerBurger}>
                <div className="container__menu">
                    <div className="container__content">
                        <div className="burger" onClick={this.props.onClickBurger}>
                            <div className="burger__inner">
                                <span className="item-burger"></span>
                            </div>
                        </div>
                        <NavMobile />
                        <div className="lang">
                            <button className="lang__button">Eng</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuMobile;