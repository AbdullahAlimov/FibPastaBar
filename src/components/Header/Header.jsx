import React, { useState } from 'react';
import classes from "./Header.module.scss"
import GrayButton from '../UI/button/GrayButton/GrayButton';
import YellowButton from '../UI/button/YellowButton/YellowButton';
import RequestCall from '../modalContent/RequestCall/RequestCall';
import logoImage from "../../assets/image/logo/logo.png";
import logoYandexImage from "../../assets/image/icon/yandex.png";
import starImage from "../../assets/image/icon/star.png";
import Modal from "../UI/Modal/Modal"
import { HashLink as Link } from 'react-router-hash-link';
import { useSelector } from "react-redux";
import Tooltip from '../CartTooltip/CartTooltip';

const Header = ({ city }) => {
    const [tooltipState, setTooltipState] = useState(false);
    const [burgerState, setBurgerState] = useState(false);
    const [modalValue, setModalValue] = useState(false);
    const cart = useSelector(state => state.cart);
    return (
        <header className={`${classes.container} ${burgerState && classes.small}`}>
            <div className={classes.content}>
                <div className={classes.info}>
                    <div className={classes.block}>
                        <div className={classes.logo}>
                            <Link to="/"><img src={logoImage} alt="" /></Link>
                        </div>
                        <div className={classes.delivery}>
                            <p className={classes.deliveryFrom}>Доставка пасты <span className={classes.city}>{city}</span></p>
                            <div className={classes.deliveryInfo}>
                                <div className={classes.yandexRaiting}>
                                    <div className={classes.icon}>
                                        <img src={logoYandexImage} alt=''></img>
                                    </div>
                                    <p>Яндекс еда</p>
                                    <div className={classes.point}></div>
                                    <p>4.8</p>
                                    <div className={classes.icon}>
                                        <img src={starImage} alt=''></img>
                                    </div>
                                </div>
                                <div className={classes.deliveryTime}>
                                    <p>Время доставки</p>
                                    <div className={classes.point}></div>
                                    <p>от 30 минут</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.block}>
                        <GrayButton className={classes.bell} onClick={() => setModalValue(true)} margin="0 28px 0 0">Заказать звонок</GrayButton>
                        <p className={classes.number}>8 499 391-84-49</p>
                        <Modal value={modalValue} changeValue={setModalValue}>
                            <RequestCall changeValue={setModalValue}/>
                        </Modal>
                    </div>
                </div>
                <div className={classes.block}>
                    <nav className={`${classes.menu} ${burgerState && classes.active}`}>
                        <ul className={classes.navigation}>
                            <li><Link to="/#pizza" >Пицца</Link></li>
                            <li><Link to="/#dessert">Десерты</Link></li>
                            <li><Link to="/#drink" >Напитки</Link></li>
                            <li><Link to="/stocks">Акции</Link></li>
                            <li><Link to="/combo">Комбо</Link></li>
                            <li><Link to="/contacts">Контакты</Link></li>
                        </ul>
                        <button className={classes.enter}>Войти</button>
                        <p className={classes.number}>8 499 391-84-49</p>
                        <div className={classes.cartContainer}>
                            <Link to="/cart"><YellowButton className={classes.cart} width="180px" height="42px" margin="">Корзина  |  {cart.value.length}</YellowButton></Link>
                        </div>
                    </nav>
                    <div className={classes.cartContainer} onMouseOver={() => setTooltipState(true)} onMouseLeave={() => setTooltipState(false)}>
                        <Link to="/cart"><YellowButton className={classes.cart} width="180px" height="42px" margin="">Корзина  |  {cart.value.length}</YellowButton></Link>
                        <Tooltip state={tooltipState}></Tooltip>
                    </div>
                </div>
                <button className={`${classes.burger} ${burgerState && classes.active}`} onClick={() => setBurgerState(!burgerState)}>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;