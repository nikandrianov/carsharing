import React from 'react';
import '../assets/style/main.scss';
import Menu from '../components/Menu';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import MenuMobile from '../components/MenuMobile';

let containerBurger = React.createRef();

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.onClickcHamburger = this.onClickcHamburger.bind(this);
        this.onClickHamburger = this.onClickHamburger.bind(this);
        this.onClickBurger = this.onClickBurger.bind(this);
    }

    onClickcHamburger () {
        containerBurger.current.style.display = 'block';
    }

    onClickBurger () {
        containerBurger.current.style.display = 'none';
    }

    onClickHamburger () {
        containerBurger.current.style.display = 'block';
    }

    render() {
        return (
            <div className="wrapper">
                <div className="container__inner">
                    <div className="container__item">
                        <Menu 
                            onClickcHamburger={this.onClickcHamburger}
                        />
                        <div className="content">
                            <div className="content__inner">
                                <Header 
                                    onClickHamburger={this.onClickHamburger}
                                />
                                <MainContent />
                                <Footer />
                            </div>
                        </div>
                        <Slider />
                    </div>
                    <MenuMobile 
                        containerBurger={containerBurger}
                        onClickBurger={this.onClickBurger}
                    />
                </div>
            </div>
        )
    }
}

export default Main;
