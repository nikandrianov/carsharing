import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <div className="menu__inner">
                    <div className="c-hamburger">
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