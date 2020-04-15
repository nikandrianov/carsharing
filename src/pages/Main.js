import React from 'react';
import '../assets/style/main.scss';
import Menu from '../components/Menu';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import MenuMobile from '../components/MenuMobile';

class Main extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container__inner">
                    <div className="container__item">
                        <Menu />
                        <div className="content">
                            <div className="content__inner">
                                <Header />
                                <MainContent />
                                <Footer />
                            </div>
                        </div>
                        <Slider />
                    </div>
                    <MenuMobile />
                </div>
            </div>
        )
    }
}

export default Main;
