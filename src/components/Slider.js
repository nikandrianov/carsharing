import React from 'react';
import { connect } from 'react-redux';

import Carousel from 'react-bootstrap/Carousel';

class Slider extends React.Component {
    showList() {
        return this.props.slider.map( (item) => (
            <Carousel.Item key={item.id}>
                <img src={item.src} alt={`slide${item.id}`}/>
                <Carousel.Caption>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <button className={`btn btn__slide${item.id}`}>Подробнее</button>
                </Carousel.Caption>
            </Carousel.Item>
        ))
    }
    render() {
        return (
            <div className="slider d-none d-sm-none d-md-none d-lg-block">
                <Carousel>
                    {this.showList()}
                </Carousel>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        slider: state.slider
    }
}

export default connect(mapStateToProps)(Slider);