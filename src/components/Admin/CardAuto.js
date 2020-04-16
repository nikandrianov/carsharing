import React from 'react';

import i30 from '../../assets/image/cars/i30n.png';

class CardAuto extends React.Component {
    render() {
        return (
            <div className="card-car">
                <div className="card-body car-info">
                    <img className="card-img-top" src={ i30 } alt="i30n" />
                    <h5 className="card-title">Hyundai, i30 N</h5>
                    <p className="card-text">Компакт-кар</p>
                </div>
                <div className="input-group car-img-file">
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="inputGroupFile" />
                        <label className="custom-file-label" for="inputGroupFile">Выберите файл...</label>
                    </div>
                </div>
                <div className="progress-info">
                    <div className="info-text">
                        <p className="text-full">Заполнено</p>
                        <p className="text-procent">74%</p>
                    </div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="card-body card-description">
                    <h5 className="card-title_desc">Описание</h5>
                    <p className="card-text_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sunt dolor culpa maiores quam maxime ipsum illum, voluptatum fuga rem iure omnis tempore sed quos minus fugiat veritatis dolorum expedita.</p>
                </div>
            </div>
        )
    }
}

export default CardAuto;