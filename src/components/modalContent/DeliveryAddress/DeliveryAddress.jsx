import React, { useState } from 'react';
import classes from "./DeliveryAddress.module.scss"
import YellowButton from '../../UI/button/YellowButton/YellowButton';
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../store/address.slice';

const DeliveryPopup = ({orderStatus,setOrderStatus, setModalValue}) => {
    const dispatch = useDispatch();
    const address = useSelector(state => state.address)

    const [deliveryType,setDeliveryType]=useState("delivery")

    const { register, handleSubmit, formState: { errors } , getValues} = useForm({
        defaultValues: {
            city: address.value.city,
            street: address.value.street,
            house: address.value.house,
            entrance: address.value.entrance,
            floor: address.value.floor,
            flat: address.value.flat,
            name: address.value.name,
            comment: address.value.comment
        }
    });

    const onSubmit = (data) => {
        setModalValue(false);
        setOrderStatus("registration");
        dispatch(actions.changeAddress(data));
    };
    return (
        <div className={classes.container}>
            <p className={classes.title}>Куда доставить?</p>
            <form className={classes.deliveryType}>
                <label >
                    <div className={deliveryType === "delivery" ? `${classes.buttonActive}` : `${classes.button}`}>Доставка</div>
                    <input type="radio" name="radioDough" onClick={() => setDeliveryType("delivery")} defaultChecked={true}></input>
                </label>
                <label >
                    <div className={deliveryType === "pickup" ? `${classes.buttonActive}` : `${classes.button}`}>Самовывоз</div>
                    <input type="radio" name="radioDough" onClick={() => setDeliveryType("pickup")}></input>
                </label>
            </form>
            <form className={classes.info} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input type="text" placeholder='Город' {...register("city", { required: "Обязательное поле!"})} />
                    {errors?.city && <p>{errors.city.message}</p>}
                </div>
                <div>
                    <input type="text" placeholder='Улица' {...register("street", { required: "Обязательное поле!"})} />
                    {errors?.street && <p>{errors.street.message}</p>}
                </div>
                <div>
                    <input type="text" placeholder='Дом' {...register("house", { required: "Обязательное поле!"})} />
                    {errors?.house && (<p>{errors.house.message}</p>)}
                </div>
                <div>
                    <input type="number" placeholder='Подъезд'  {...register("entrance", { required: "Обязательное поле!"})} />
                    {errors?.entrance && (<p>{errors.entrance.message}</p>)}
                </div>
                <div>
                    <input type="number" placeholder='Этаж' {...register("floor", { required: "Обязательное поле!"})} />
                    {errors?.floor && (<p>{errors.floor.message}</p>)}
                </div>
                <div>
                    <input type="number" placeholder='Квартира' {...register("flat", { required: "Обязательное поле!"})} />
                    {errors?.flat && <p сlassName={classes.warning}>{errors.flat.message}</p>}
                </div>
                <div className={classes.name}>
                    <input type="text" placeholder='Название адреса' {...register("name", { required: false})} />
                </div>
                <p className={classes.text}>Например, <span >Дом</span> или <span>Работа</span></p>
                <div className={classes.comment}>
                    <textarea placeholder='Комментарий к адресу' {...register("comment", { required: false})} />
                </div>
                {orderStatus!=="registration"?
                <YellowButton className={classes.button} width={224} height={55}>Подтвердить адрес</YellowButton>
                :<div className={classes.button} onClick={()=>{
                    setModalValue(false);
                    dispatch(actions.changeAddress(getValues()));
                    }}>Подтвердить адрес</div>}
            </form>
        </div>
    );
};

export default DeliveryPopup;