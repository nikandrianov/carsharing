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
            slide: [
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
            <div className="slider d-none d-sm-none d-md-none d-lg-block">
                <Carousel>
                    {this.state.slide.map( (item, index) => (
                        <Carousel.Item key={index}>
                            <img src={item.src} alt={`slide${item.id}`}/>
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                                <button className={`btn btn__slide${item.id}`}>Подробнее</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ) )}
                </Carousel>
            </div>
        )
    }
}

export default Slider;