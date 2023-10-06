import React, { useState } from 'react';
import classes from "./RequestCall.module.scss"
import InputMask from "react-input-mask";
import YellowButton from '../../UI/button/YellowButton/YellowButton';
import tickImage from "../../../assets/image/icon/tick.png"
import { useForm } from 'react-hook-form';


const RequestCall = ({ changeValue }) => {
    const [applicationValue, setApplicationValue] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            tel: "",
        }
    });

    const onSubmit = (data) => {
        setApplicationValue(true)
    };

    return (
        applicationValue === false ?
            <form onSubmit={handleSubmit(onSubmit)}>
                <p className={classes.title}>Заказать звонок</p>
                <InputMask mask="+7 (999) 999-99-99" maskChar='_'>
                    {(inputProps) => <div>
                        <input  {...inputProps}  type='tel' className={classes.input} placeholder="Номер телефона" {...register("tel", { required: "Обязательное поле!" })} />
                    </div>}
                </InputMask>
                {errors?.tel && <p className={classes.message}>{errors.tel.message}</p>}
                <YellowButton height={55} width={"100%"} >Оставить заявку</YellowButton>
            </form >
            :
            <div className={classes.applicationAccepted}>
                <div className={classes.image}>
                    <img src={tickImage} alt="" />
                </div>
                <p className={classes.title}>Заявка оставленна </p>
                <p className={classes.description}>Ожидайте звонка в будни с 09:00 до 19:00 </p>
                <YellowButton height={55} width={"100%"} onClick={() => {
                    setApplicationValue(false);
                    changeValue(false);
                }} >Вернуться обратно</YellowButton>
            </div>
    );
};

export default RequestCall;