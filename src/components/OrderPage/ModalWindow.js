import React from 'react';

class ModalWindow extends React.Component {
    render() {
        return (
            <div className="modal-window">
                <div className="modal__inner">
                    <h1>Подтвердить заказ</h1>
                    <button className="btn button-accept">Подтвердить</button>
                    <button className="btn button-return">Вернуться</button>
                </div>
            </div>
        )
    }
}

export default ModalWindow;