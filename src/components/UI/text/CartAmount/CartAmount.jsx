import React from 'react';
import classes from "./CartAmount.module.scss";
import { useSelector } from 'react-redux';

const CartAmount = ({ className }) => {
    const cart = useSelector(state => state.cart);
    const discount = useSelector(state => state.discount);

    const cartAmount = Array.isArray(cart.value)?cart.value.reduce((acc, item) => acc + (+item.price), 0):0;
    return (
        <div className={classes.amountContainer}>
            {discount.min_amount <= cartAmount && <del className={className} style={{fontSize:16,color:"#777"}}>
                {`${cartAmount} ₽`}
            </del>}
            <p className={className}>
                {discount.min_amount <= cartAmount
                    ? (() => {
                        switch (discount.type) {
                            case "number":
                                return cartAmount - discount.value;
                            case "procent":
                                return Math.floor(cartAmount * (1 - discount.value / 100));
                            default:
                                return cartAmount;
                        }
                    })()
                    : cartAmount} ₽
            </p>
        </div>
    );
};

export default CartAmount;