import React from 'react';
import classes from "./OrderProgress.module.scss"

const OrderProgress = ({ orderStatus }) => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={orderStatus === "approval" ? classes.itemActive : classes.item}>
                    <div className={classes.circle}>1</div>
                    <p>Корзина</p>
                </div>
                <div className={orderStatus === "registration" ? classes.itemActive : classes.item}>
                    <div className={classes.circle}>2</div>
                    <p>Оформление</p>
                </div>
                <div className={orderStatus === "accepted" ? classes.itemActive : classes.item}>
                    <div className={classes.circle}>3</div>
                    <p>Заказ принят</p>
                </div>
            </div>
        </div>
    );
};

export default OrderProgress;