import React from 'react';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="menu">
                <div className="menu__inner">
                    <div className="c-hamburger" onClick={this.props.onClickcHamburger}>
                        <div className="c-hamburger__inner">
                            <span className="item-c-hamburger"></span>
                        </div>
                    </div>
                    <div className="lang">
                        <button className="lang__button">Eng</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;