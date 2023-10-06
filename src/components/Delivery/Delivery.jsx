import React, { useEffect } from 'react';
import LocationMap from '../UI/LocationMap/LocationMap';
import Aos from "aos";
import "aos/dist/aos.css"
import classes from "./Delivery.module.scss"
import marketImage from '../../assets/image/icon/market.png';
import documentImage from '../../assets/image/icon/documents.png';
import onlineImage from '../../assets/image/icon/online.png';
import speedImage from '../../assets/image/icon/speed.png';

const Delivery = () => {
    useEffect(()=>{
        Aos.init({duration: 500})
    },[])
    return (
        <div className={classes.container}>

            <div className={classes.content}>
                <p className={classes.title}>Оплата и доставка</p>
                <ul className={classes.info}>
                    <li>
                        <div className={classes.icon}>
                            <img src={marketImage} alt="" />
                        </div>
                        <div className={classes.infoItem}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </div>
                    </li>
                    <li>
                        <div className={classes.icon}>
                            <img src={onlineImage} alt="" />
                        </div>
                        <div className={classes.infoItem}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </div>
                    </li>
                    <li>
                        <div className={classes.icon}>
                            <img src={documentImage} alt="" />
                        </div>
                        <div className={classes.infoItem}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </div>
                    </li>
                    <li>
                        <div className={classes.icon}>
                            <img src={speedImage} alt="" />
                        </div>
                        <div className={classes.infoItem}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </div>
                    </li>
                </ul>
                <LocationMap></LocationMap>
            </div>
        </div>
    );
};

export default Delivery;