import React from 'react';
import LocationMap from '../../components/UI/LocationMap/LocationMap';
import classes from "./Contacts.module.scss"
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Contacts = () => {
    return (
        <div>
            <Header city={"Тюмень"}></Header>
            <div className={classes.container}>
                <LocationMap></LocationMap>
                <p className={classes.number}>8 800 333-36-62</p>
                <p className={classes.adress}>ул. Проспект Вернадского 86В</p>
                <p className={classes.delivery}>Доставка и самовывоз 10:00 — 23:00</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contacts;