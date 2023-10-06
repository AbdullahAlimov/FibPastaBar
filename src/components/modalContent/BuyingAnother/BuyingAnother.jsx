import React from 'react';
import classes from './BuyingAnother.module.scss'
import YellowButton from '../../UI/button/YellowButton/YellowButton';
import { useDispatch } from 'react-redux';
import { actions } from '../../../store/cart.slice';

const BuyingAnother = ({ item, setModalValue }) => {
    const dispatch = useDispatch();
    return (
        <div className={classes.container}>
            <div className={classes.image}>
                <img src={`./image/${item.image}`} alt=''></img>
            </div>
            <p className={classes.name}>{item.name}</p>
            <p className={classes.weight}>{item.weight ? `${item.weight} г.` : `${item.volume} л.`}</p>
            <p className={classes.description}>{item.description}</p>
            <YellowButton width={'100%'} height={59} onClick={() => {
                dispatch(actions.addToCart(item));
                setModalValue(false)
            }}>Добавить в корзину {item.price} ₽</YellowButton>
        </div>
    );
};

export default BuyingAnother;