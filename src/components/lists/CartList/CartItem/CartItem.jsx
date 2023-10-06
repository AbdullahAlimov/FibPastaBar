import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import classes from "./CartItem.module.scss"
import { actions } from '../../../../store/cart.slice';

const CartItem = ({ item, type }) => {

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();

    const _ =require('lodash')

    const quantity = cart.value.filter(i => _.isEqual(i,item)).length;

    return (
        <div className={`${classes.container} ${type === "tooltip" && classes.tooltip}`}>
            <div className={`${classes.image} ${type === "tooltip" && classes.tooltip}`}>
                <img src={`../../../../image/${item.image}`} alt=''></img>
            </div>
            <div className={classes.info}>
                <p className={classes.name}>{item.name}</p>
                {type === "full" &&
                    <div>
                        <p className={classes.description}>
                            {item.description === "" || item.description ? item.description : item.composition.join(", ")}{" "}
                            {item.weight ? `${item.weight} г.` : `${item.volume} л.`}
                        </p>
                        {
                            item.addedIngridients?.length ?
                                <p className={classes.addedIngridients}>{"Дополнительно: "}{item.addedIngridients.reduce((acc, item) => {
                                    acc.push(item.name);
                                    return acc;
                                }, []).join(", ")}</p>
                                : <p></p>
                        }
                    </div>
                }
            </div>
            <p className={`${classes.price} ${type === "tooltip" && classes.tooltip}`}>{item.price * quantity} ₽</p>
            <div className={`${classes.counter} ${type === "tooltip" && classes.tooltip}`}>
                <button className={classes.decrement} onClick={() => dispatch(actions.removeFromCart(item))}>-</button>
                <p className={classes.quantity}>{quantity}</p>
                <button className={classes.increment} onClick={() => dispatch(actions.addToCart(item))}>+</button>
            </div>
            <button className={`${classes.delete} ${type === "tooltip" && classes.tooltip}`} onClick={() => dispatch(actions.removeAllFromCart(item))
            }></button>
        </div>
    );
};

export default CartItem;