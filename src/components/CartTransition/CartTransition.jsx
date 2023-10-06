import React from 'react';
import { Link } from 'react-router-dom';
import YellowButton from '../UI/button/YellowButton/YellowButton';
import classes from './CartTransition.module.scss'
import Modal from "../UI/Modal/Modal"

const CartTransition = ({ orderStatus, setOrderStatus, setModalValue, modalValue, children }) => {
    return (
        <div className={classes.container}>
            <div className={classes.transition}>
                <Link to={"/"} className={classes.shop}><button >{"❰ Вернуться в магазин"}</button></Link>
                {orderStatus ?
                    <YellowButton width={224} height={55} onClick={() => { setOrderStatus(orderStatus) }}>{"Оформить заказ ❱"}</YellowButton>
                    : <YellowButton width={224} height={55} onClick={() => { setModalValue && setModalValue(true) }}>{"Оформить заказ ❱"}</YellowButton>
                }
                {modalValue &&
                    <Modal value={modalValue} changeValue={setModalValue}>
                        {children}
                    </Modal>}
            </div>
        </div>
    );
};

export default CartTransition;