import React from 'react';

import elantra from '../../assets/image/cars/elantra.png';
import creta from '../../assets/image/cars/creta.png';
import i30 from '../../assets/image/cars/i30n.png';
import sonata from '../../assets/image/cars/sonata.png';

class Models extends React.Component {
    render() {
        return (
            <div className="model__inner">
                <div className="model-item">
                    <ul className="model-control">
                        <li className="control-li-model"><span className="control-span-model span__active"></span>Модели</li>
                        <li className="control-li-eko"><span className="control-span-eko"></span>Эконом</li>
                        <li className="control-li-premium"><span className="control-span-premium"></span>Премиум</li>
                    </ul>
                    <div className="model-list">
                        <div className="card model-1">
                            <div className="card-body">
                                <h5 className="card-title text-uppercase elantra">Elantra</h5>
                                <h6 className="card-subtitle">12 000 - 25 000 ₽</h6>
                                <img className="card-img-bottom" src={ elantra } alt="elantra" />
                            </div>
                        </div>
                        <div className="card model-2">
                            <div className="card-body">
                                <h5 className="card-title i30n">i30 N</h5>
                                <h6 className="card-subtitle">10 000 - 32 000 ₽</h6>
                                <img className="card-img-bottom" src={ i30 } alt="i30n" />
                            </div>
                        </div>
                        <div className="card model-3">
                            <div className="card-body">
                                <h5 className="card-title text-uppercase creta">Creta</h5>
                                <h6 className="card-subtitle">12 000 - 25 000 ₽</h6>
                                <img className="card-img-bottom" src={ creta } alt="creta" />
                            </div>
                        </div>
                        <div className="card model-4">
                            <div className="card-body">
                                <h5 className="card-title text-uppercase sonata">Sonata</h5>
                                <h6 className="card-subtitle">10 000 - 32 000 ₽</h6>
                                <img className="card-img-bottom" src={ sonata } alt="sonata" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Models;