import React from 'react';

class ModalWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="modal-window" ref={this.props.modalWindow}>
                <div className="modal__inner">
                    <h1>Подтвердить заказ</h1>
                    <button className="btn button-accept" ref={this.props.btnAccept} onClick={this.props.btnClickAccept}>Подтвердить</button>
                    <button className="btn button-return" ref={this.props.btnReturn} onClick={this.props.btnClickReturn}>Вернуться</button>
                </div>
            </div>
        )
    }
}

export default ModalWindow;