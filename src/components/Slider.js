import React from 'react';

import slide1 from '../assets/image/slide1.png';
import slide2 from '../assets/image/slide2.png';
import slide3 from '../assets/image/slide3.png';
import slide4 from '../assets/image/slide4.png';

class Slider extends React.Component {
    render() {
        return (
            <div className="content__slider d-none d-sm-none d-md-none d-lg-block">
                <div id="my-carousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li className="active" data-target="#my-carousel" data-slide-to="0"></li>
                        <li data-target="#my-carousel" data-slide-to="1"></li>
                        <li data-target="#my-carousel" data-slide-to="2"></li>
                        <li data-target="#my-carousel" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={ slide1 } alt="slide1" />
                            <div className="carousel__text">
                                <div className="carousel-caption">
                                    <h3>Бесплатная парковка</h3>
                                    <p>Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.</p>
                                    <button className="btn btn__slide1">Подробнее</button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={ slide2 } alt="slide2" />
                            <div className="carousel__text">
                                <div className="carousel-caption">
                                    <h3>Страховка</h3>
                                    <p>Полная страховка страховка автомобиля</p>
                                    <button className="btn btn__slide2">Подробнее</button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={ slide3 } alt="slide3" />
                            <div className="carousel__text">
                                <div className="carousel-caption">
                                    <h3>Бензин</h3>
                                    <p>Полный бак на любой заправке города за наш счёт</p>
                                    <button className="btn btn__slide3">Подробнее</button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={ slide4 } alt="slide4" />
                            <div className="carousel__text">
                                <div className="carousel-caption">
                                    <h3>Обслуживание</h3>
                                    <p>Автомобиль проходит еженедельное ТО</p>
                                    <button className="btn btn__slide4">Подробнее</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#my-carousel" data-slide="prev" role="button">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#my-carousel" data-slide="next" role="button">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Slider;