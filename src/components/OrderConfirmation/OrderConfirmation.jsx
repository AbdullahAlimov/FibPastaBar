import React, { useState, useEffect } from 'react';
import classes from './OrderConfirmation.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/discount.slice';
import { StocksService } from '../../services/pizza.services';
import CartTransition from '../CartTransition/CartTransition';
import DeliveryPopup from '../modalContent/DeliveryAddress/DeliveryAddress';
import CartAmount from '../UI/text/CartAmount/CartAmount';

const OrderConfirmation = ({ setOrderStatus }) => {
    const [promocode, setPromocode] = useState("");
    const [promocodeActive, setPromocodeActive] = useState(false);
    const [stocks, setStocks] = useState([]);
    const [modalValue, setModalValue] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            setStocks(await StocksService.getAll());
        }
        fetchData();
    }, [])
    const cart = useSelector(state => state.cart);
    const discount = useSelector(state => state.discount);

    const cartAmount = cart.value.reduce((acc, item) => acc + (+item.price), 0);

    const dispatch = useDispatch();
    return (
        <div className={classes.container}>
            <p className={classes.title}>Промокод</p>
            <div className={classes.payment}>
                <div className={classes.promocode}>
                    <input type="text" placeholder='Введите промокод' onChange={(item) => setPromocode(item.target.value)} />
                    <button className={classes.button} onClick={() => {
                        stocks.forEach((stock) => {
                            if (promocode === stock.promocode) {
                                dispatch(actions.setDiscount(stock));
                                setPromocodeActive(true);
                            }
                        })
                    }}>Применить</button>
                </div>
                <div className={classes.amountContainer}>
                    <p className={classes.text}>{"Сумма заказа:  "}</p>
                    <CartAmount className={classes.amount}></CartAmount>
                </div>
                <p className={classes.promocodeActive}>
                    {promocodeActive ? cartAmount >= discount.min_amount ? `Активирован промокод ${promocode} на скидку ${discount.type === "number" ? `${discount.value} ₽` : `${discount.value} %`}` : `Для активации промокода сумма заказа должна составлять ${discount.min_amount} ₽`:""}
                </p>
            </div>
            <CartTransition setModalValue={setModalValue} modalValue={modalValue} ><DeliveryPopup setOrderStatus={setOrderStatus} setModalValue={setModalValue}></DeliveryPopup></CartTransition>
        </div>
    );
};

export default OrderConfirmation;