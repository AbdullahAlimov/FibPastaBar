import React, { useState } from 'react';
import classes from './OrderRegistration.module.scss'
import { useSelector } from 'react-redux';
import CartTransition from '../../../components/CartTransition/CartTransition';
import DeliveryTime from '../../../components/modalContent/DeliveryTime/DeliveryTime';
import Modal from '../../../components/UI/Modal/Modal';
import DeliveryPopup from '../../../components/modalContent/DeliveryAddress/DeliveryAddress';
import { useForm } from 'react-hook-form';
import YellowButton from '../../../components/UI/button/YellowButton/YellowButton';
import CartAmount from '../../../components/UI/text/CartAmount/CartAmount';
import PaymentForm from '../../../components/PaymentForm/PaymentForm';

const InfoInput = ({ tag, modal, value, errors, register, inputType, inputName, readChange }) => {
    const [modalValue, setModalValue] = useState(false);
    const [isReadOnly, setIsReadonly] = useState(true);
    return (
        <div className={classes.inputContainer}>
            {tag === "input"
                ? <input className={classes.input} type={inputType} value={value} readOnly={isReadOnly} {...register(inputName, { required: "Обязательное поле!" })} />
                : <textarea className={classes.input} value={value} readOnly={isReadOnly} cols="30" rows="10"></textarea>}
            <button type="button" className={classes.buttonChange} onClick={() => {
                setModalValue(true);
                setIsReadonly(prevState => readChange ? !prevState : prevState);
            }}>Изменить</button>
            {modal && <Modal value={modalValue} changeValue={setModalValue}>{modal}</Modal>}
            {errors !== undefined && errors?.[inputName] && (<p className={classes.message}>{errors[inputName].message}</p>)}
        </div>
    )
}

const OrderRegistration = ({ setOrderStatus }) => {
    const cart = useSelector(state => state.cart);
    const address = useSelector(state => state.address);
    const deliveryTime = useSelector(state => state.deliveryTime);

    const adrressText = `${address.value.name}\nг. ${address.value.city},  ул. ${address.value.street},  д. ${address.value.house},  подъезд ${address.value.entrance},  этаж ${address.value.floor},  кв. ${address.value.flat}`

    const [payment, setPayment] = useState("card");
    const [cash, setCash] = useState("nonChange");

    const [modalValue, setModalValue] = useState(false);

    const { register, handleSubmit, control, setValue, formState: { errors, isValid } } = useForm({
        defaultValues: {
            name: null,
            tel: null,
            time: deliveryTime.value,
            adrress: adrressText,
            radioCash: cash,
            cashChange: 0,
            cardNumber: null,
            cardCvc: null,
            cardPeriod: null,
        }
    });

    const onSubmit = (data) => {
        console.log("the form has been sent")
    };
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.content}>
                    <p className={classes.title}>Заказ на доставку</p>
                    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={classes.info}>
                            <p className={classes.inputName}>Имя</p>
                            <InfoInput tag="input"
                                inputType="text"
                                modal=""
                                readChange={true}
                                value={undefined}
                                errors={errors}
                                inputName="name"
                                register={register} />
                            <p className={classes.inputName}>Номер телефона</p>
                            <InfoInput tag="input"
                                inputType="tel"
                                modal=""
                                readChange={true}
                                value={undefined}
                                errors={errors}
                                inputName="tel"
                                register={register} />
                            <p className={classes.inputName}>Адрес доставки</p>
                            <InfoInput
                                tag="textarea"
                                inputType=""
                                readChange={false}
                                modal={<DeliveryPopup orderStatus="registration"></DeliveryPopup>}
                                value={adrressText}
                                errors={errors}
                                inputName="address"
                                register={register} />
                            <p className={classes.inputName}>Время доставки</p>
                            <InfoInput
                                tag="input"
                                inputType="text"
                                readChange={false}
                                modal={<DeliveryTime ></DeliveryTime>}
                                value={deliveryTime.value === "fast" ? "Побыстрее" : deliveryTime.value}
                                errors={errors}
                                inputName="address"
                                register={register} />
                        </div>
                        <PaymentForm
                            cash={cash}
                            control={control}
                            errors={errors}
                            payment={payment}
                            register={register}
                            setCash={setCash}
                            setPayment={setPayment}
                            setValue={setValue}
                        />
                        <div className={classes.transition}>
                            {isValid ?
                                (
                                    payment === "card" ?
                                        <CartTransition className={classes.transition} setModalValue={setModalValue} modalValue={modalValue}>
                                            <div className={classes.cardWarning}>
                                                <p className={classes.title}>Оплата картой</p>
                                                <p className={classes.text}>К сожалению сейчас оплата картой на сайте не доступна, выберите способ оплаты наличными или оплатите картой при получении.</p>
                                                <YellowButton className={classes.button} height={55} onClick={() => {
                                                    setModalValue(false);
                                                    setPayment("cash")
                                                }}>Наличными</YellowButton>
                                                <YellowButton height={55} onClick={() => setOrderStatus("accepted")}>Картой при получении</YellowButton>
                                            </div>
                                        </CartTransition>
                                        : <CartTransition setOrderStatus={setOrderStatus} orderStatus={"accepted"}></CartTransition>
                                )
                                : <CartTransition></CartTransition>
                            }
                        </div>
                    </form>
                </div>
                <div className={classes.cart}>
                    <p className={classes.cartTitle}>Состав заказа</p>
                    <ul className={classes.cartList}>
                        {
                            cart.value.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <p className={classes.name}>{item.name}</p>
                                        <p className={classes.description}>{item.type === "pizza" ? `${item.size} см, ${item.weight} г` : item.weight ? `${item.weight} г` : `${item.volume} л`}</p>
                                        <p className={classes.price}>{item.price} ₽</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className={classes.amount}>
                        <p className={classes.text}>Сумма заказа:</p>
                        <CartAmount className={classes.number}></CartAmount>
                        <p className={classes.delivery}>Доставка бесплатная</p>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default OrderRegistration;