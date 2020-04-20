import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import slide1 from '../assets/image/slide1.png';
import slide2 from '../assets/image/slide2.png';
import slide3 from '../assets/image/slide3.png';
import slide4 from '../assets/image/slide4.png';

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "slide": [
                {
                    "id": 1,
                    "title": "Бесплатная парковка",
                    "text": "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
                    "src": slide1
                },
                {
                    "id": 2,
                    "title": "Страховка",
                    "text": "Полная страховка автомобиля",
                    "src": slide2
                },
                {
                    "id": 3,
                    "title": "Бензин",
                    "text": "Полный бак на любой заправке города за наш счёт",
                    "src": slide3
                },
                {
                    "id": 4,
                    "title": "Обслуживание",
                    "text": "Автомобиль проходит еженедельное ТО",
                    "src": slide4
                },
            ]
        }
    }

    render() {
        return (
            <div className="content__slider d-none d-sm-none d-md-none d-lg-block">
                <Carousel>
                    {Object.keys(this.state.slide).map((keyName) => (
                        <Carousel.Item key={keyName}>
                            <img src={ this.state.slide[keyName].src } alt={`slide${this.state.slide[keyName].id}`} />
                            <Carousel.Caption>
                                <h3>{this.state.slide[keyName].title}</h3>
                                <p>{this.state.slide[keyName].text}</p>
                                <button className={`btn btn__slide${this.state.slide[keyName].id}`}>Подробнее</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        ) 
                    )}
                    {/* <Carousel.Item>
                        <img src={ slide1 } alt="slide1" />
                        <Carousel.Caption>
                            <h3>Бесплатная парковка</h3>
                            <p>Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.</p>
                            <button className="btn btn__slide1">Подробнее</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={ slide2 } alt="slide2" />
                        <Carousel.Caption>
                            <h3>Страховка</h3>
                            <p>Полная страховка страховка автомобиля</p>
                            <button className="btn btn__slide2">Подробнее</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={ slide3 } alt="slide3" />
                        <Carousel.Caption>
                            <h3>Бензин</h3>
                            <p>Полный бак на любой заправке города за наш счёт</p>
                            <button className="btn btn__slide3">Подробнее</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={ slide4 } alt="slide4" />
                        <Carousel.Caption>
                            <h3>Обслуживание</h3>
                            <p>Автомобиль проходит еженедельное ТО</p>
                            <button className="btn btn__slide4">Подробнее</button>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                </Carousel>
            </div>
        )
    }
}

export default Slider;