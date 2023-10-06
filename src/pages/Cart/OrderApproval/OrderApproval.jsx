import React, { useState, useEffect } from 'react';
import CartList from '../../../components/lists/CartList/CartList';
import { DrinksService, SaucesService } from '../../../services/pizza.services';
import EmptyButton from '../../../components/UI/button/EmptyButton/EmptyButton';
import classes from './OrderApproval.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import emptyImage from '../../../assets/image/empty.jpg'
import { actions } from '../../../store/cart.slice';
import Slider from '../../../components/UI/Slider/Slider';
import OrderConfirmation from '../../../components/OrderConfirmation/OrderConfirmation';

const OrderApproval = ({ setOrderStatus, orderStatus }) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)

    const [sauses, setSauses] = useState([]);
    const [drinks, setDrinks] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            setSauses(await SaucesService.getAll())
            setDrinks(await DrinksService.getAll())
        }
        fetchData();
    }, [])
    return (
        <div>
            {cart.value.length
                ? <div>
                    <CartList cart={cart} setOrderStatus={setOrderStatus}></CartList>
                    <Slider slidesPerView={3} items={drinks} gap={30} title={"Добавить к заказу?"} titleSize={24}></Slider>
                    <div className={classes.container}>
                        <p className={classes.smallTitle}>Соусы к бортикам и закускам</p>
                        <div className={classes.sausesList}>
                            {
                                sauses.map((sause) => {
                                    return (
                                        <EmptyButton key={sause.id}>
                                            <div className={classes.sause} onClick={() => { dispatch(actions.addToCart(sause)) }}>
                                                <div className={classes.image}>
                                                    <img src={`../../../../image/${sause.image}`} alt={sause.name} />
                                                </div>
                                                <p className={classes.name}>{sause.name}</p>
                                                <p className={classes.price}>{sause.price} ₽</p>
                                            </div>
                                        </EmptyButton>
                                    )
                                })
                            }
                        </div>
                        <OrderConfirmation setOrderStatus={setOrderStatus} orderStatus={orderStatus}></OrderConfirmation>
                    </div>
                </div>
                : <div className={classes.empty}>
                    <div className={classes.image}>
                        <img src={emptyImage} alt=''></img>
                    </div>
                    <p className={classes.textBig}>Ой, пусто!</p>
                    <p className={classes.text}>
                        Ваша корзина пуста, откройте «Меню»
                        и выберите понравившийся товар.
                        Мы доставим ваш заказ от 549 ₽
                    </p>
                </div>
            }
        </div>
    );
};

export default OrderApproval;