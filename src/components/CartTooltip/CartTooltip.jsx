import React from 'react';
import classes from './CartTooltip.module.scss';
import CartItem from '../lists/CartList/CartItem/CartItem';
import { useSelector } from 'react-redux';
import CartAmount from '../UI/text/CartAmount/CartAmount';

const Tooltip = ({state}) => {
    const cart = useSelector(state => state.cart)
    const _=require("lodash")
    return (
        <div className={`${classes.container} ${state===true && cart.value.length && classes.active}`}>
            <div className={classes.content}>
                <div className={classes.cart}>
                {
                _.uniqWith(cart.value, _.isEqual).map((item) => {
                    return <CartItem key={item.id} item={item} type="tooltip"></CartItem>;
                })
                }
                </div>
                <div className={classes.amountContainer}>
                    <p>Сумма заказа:</p>
                    <CartAmount className={classes.amount}></CartAmount>
                </div>
            </div>
        </div>
    );
};

export default Tooltip;