import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import OrderApproval from './OrderApproval/OrderApproval';
import OrderRegistration from './OrderRegistration/OrderRegistration';
import OrderAccepted from './OrderAccepted/OrderAccepted';
import OrderProgress from '../../components/OrderProgress/OrderProgress';
import { useSelector } from 'react-redux';
const Cart = () => {
    const [orderStatus, setOrderStatus] = useState("approval");
    const cart=useSelector(state=>state.cart)

    const cartRouter = () => {
        switch (orderStatus) {
            case "approval":
                return (<OrderApproval orderStatus={orderStatus} setOrderStatus={setOrderStatus}></OrderApproval>)
            case "registration":
                return (<OrderRegistration orderStatus={orderStatus} setOrderStatus={setOrderStatus}></OrderRegistration>)
            case "accepted":
                return (<OrderAccepted orderStatus={orderStatus} setOrderStatus={setOrderStatus}></OrderAccepted>)
            default:
                return (<div></div>)
        }
    }
    return (
        <div>
            <Header city="Москва"></Header>
            {cart.value.length!==0 && <OrderProgress orderStatus={orderStatus} />}
            {
                cartRouter()
            }
            <Footer></Footer>
        </div>
    );
};

export default Cart;