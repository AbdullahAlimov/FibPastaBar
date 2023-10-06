import React from 'react';
import classes from './CartList.module.scss'
import CartItem from './CartItem/CartItem';

const CartList = ({ cart }) => {
    const _ = require('lodash');
    return (
        <div className={classes.container}>
            <p className={classes.title}>Корзина</p>
            {
                _.uniqWith(cart.value, _.isEqual).map((item) => {
                    return <CartItem item={item} key={item.id} type="full"></CartItem>;
                })
            }
        </div>
    );
};

export default CartList;