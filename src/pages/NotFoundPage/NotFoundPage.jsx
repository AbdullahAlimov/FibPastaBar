import React from 'react';
import classes from './NotFoundPage.module.scss'
import YellowButton from '../../components/UI/button/YellowButton/YellowButton';
import notFoundPageImage from "../../assets/image/icon/nothing.svg"
import logoImage from "../../assets/image/logo/logo.png"
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className={classes.container}>
            <div className={classes.logo}>
                <img src={logoImage} alt="" />
            </div>
            <p className={classes.title}>Мы не нашли эту страницу</p>
            <p className={classes.text}>Но знаем, где найти много всего вкусного</p>
            <Link to={"/"}><YellowButton height={60}>Вернуться в магазин</YellowButton></Link>
            <div className={classes.image}>
                <img src={notFoundPageImage} alt="" />
            </div>
        </div>
    );
};

export default NotFoundPage;