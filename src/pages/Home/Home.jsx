import React, {useEffect, useState } from 'react';
import { PizzaService, StocksService, DessertsService, DrinksService } from '../../services/pizza.services';
import Aos from "aos";
import "aos/dist/aos.css"
import classes from "./Home.module.scss"
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PizzaList from '../../components/lists/ProductList/ProductList';
import Delivery from '../../components/Delivery/Delivery';
import StocksSlider from '../../components/StocksSlider/StocksSlider';
import Slider from '../../components/UI/Slider/Slider';

import scrollManImage from '../../assets/image/scrollWoman.png'
import scrollWomanImage from '../../assets/image/scrollMan.png'
const Home = () => {
    const [pizzas, setPizzas] = useState([]);
    const [desserts, setDesserts] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [stocks, setStocks] = useState([]);
    const [scrollVisible, setScrollVisible] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setPizzas(await PizzaService.getAll());
            setStocks(await StocksService.getAll());
            setDesserts(await DessertsService.getAll());
            setDrinks(await DrinksService.getAll());
        }

        fetchData();

        Aos.init({ duration: 500, offset: 1100 });

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const scrollHeight = document?.querySelector(`.${classes.lists}`)?.scrollHeight;
        if (window.scrollY >= scrollHeight - 200) {
            setScrollVisible(false);
            Aos.refresh();
        } else {
            setScrollVisible(true);
        }
    };
    return (
        <div className={classes.container}>
            <Header city="Калач-на-Дону" />
            <StocksSlider items={stocks}></StocksSlider>
            <Slider slidesPerView={4} items={pizzas.filter((pizza) => { return +(pizza.dateAdded.split("-")[1]) > 6 })} gap={30} title={"Новинки"}></Slider>
            <div className={classes.lists}>
                <PizzaList id="pizza" pizzas={pizzas} title="Пицца" />
                <PizzaList id="dessert" pizzas={desserts} title="Десерты" />
                <PizzaList id="drink" pizzas={drinks} title="Напитки" />
                <div className={scrollVisible ? classes.imageLeft : `${classes.imageLeft} ${classes.imageHidden}`} data-aos="slide-left" data-aos-mirror={true}>
                    <img src={scrollManImage} alt="" />
                </div>
                <div className={scrollVisible ? classes.imageRight : `${classes.imageRight} ${classes.imageHidden}`} data-aos="slide-right" data-aos-mirror={true}>
                    <img src={scrollWomanImage} alt="" />
                </div>
            </div>
            <Delivery></Delivery>
            <Footer/>
        </div>
    );
};

export default Home;