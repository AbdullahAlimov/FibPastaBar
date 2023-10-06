import React,{useState} from 'react';
import classes from "./PaymentForm.module.scss"
import {Controller } from 'react-hook-form';
import InputMask from "react-input-mask";
import cardInfoImage from "../../assets/image/cardInfo.png"
import cardImage from "../../assets/image/card.png"

const PaymentForm = ({register,setValue,errors,control,payment,setPayment,cash,setCash}) => {
    const [cvcVisible, setCvcVisible] = useState(false);
    return (
        <div className={classes.payment}>
        <p className={classes.paymentTitle}>Способы оплаты</p>
        <div className={classes.radioButton}>
            <label >
                <div className={payment === "card" ? `${classes.radioActive}` : `${classes.radio}`}></div>
                <p>Картой на сайте</p>
                <input type="radio" name="radioPayment" onChange={() => setPayment("card")} defaultChecked={true}></input>
            </label>
            <label >
                <div className={payment === "cash" ? `${classes.radioActive}` : `${classes.radio}`}></div>
                <p>Наличными</p>
                <input type="radio" name="radioPayment" onChange={() => setPayment("cash")}></input>
            </label>
        </div>
        {payment === "cash"
            ? <div className={classes.cashCorrection}>
                <p>С какой суммы подготовить сдачу?</p>
                <label className={classes.numberLabel}>
                    <input
                        className={cash === "change" ? `${classes.input}` : `${classes.disabledInput}`}
                        type="number"
                        style={errors.cashChange && { backgroundColor: "#ffd2d2" }}

                        onClick={() => {
                            setCash("change");
                        }}
                        onFocus={(e) => e.target.value=null}
                        {...register("cashChange", { required: cash === "change" ? "Oбязательное поле!" : false })}
                    />
                    <p className={classes.currency}>₽</p>
                    <input
                        type="radio"
                        value="change"
                        onChange={() => setCash("nonChange")}
                        {...register("radioCash")}
                    />
                </label>
                <label className={classes.radioLabel}>
                    <div className={cash === "nonChange" ? `${classes.radioActive}` : `${classes.radio}`}></div>
                    <p>Без сдачи</p>
                    <input
                        type="radio"
                        value="nonChange"
                        onClick={() => {
                            cash === "change" ? setCash("nonChange") : setCash("change");
                            setValue("cashChange",0)
                        }}
                        {...register("radioCash")}
                    />
                </label>
            </div>
            : <div className={classes.cardCorrection}>
                <Controller name="cardNumber" control={control} defaultValue="" rules={{ required: "Обязательное поле!" }} render={({ field }) => (
                    <InputMask
                        mask="9999-9999-9999-9999"
                        autoComplete="cc-number"
                        className={classes.input}
                        placeholder="xxxx-xxxx-xxxx-xxxx"
                        style={errors.cardNumber && { backgroundColor: "#ffd2d2" }}
                        {...field}
                    >
                        {(inputProps) => <input type="tel" {...inputProps} />}
                    </InputMask>
                )}
                />
                <Controller name="cardPeriod" control={control} defaultValue="" rules={{ required: "Обязательное поле!", minLength: 4 }} render={({ field }) => (
                    <InputMask
                        mask="99 / 99"
                        autoComplete="cc-exp"
                        className={classes.input}
                        placeholder="xx / xx"
                        style={errors.cardPeriod && { backgroundColor: "#ffd2d2" }}
                        {...field}
                    >
                        {(inputProps) => <input type="tel" {...inputProps} />}
                    </InputMask>
                )}
                />
                <Controller name="cardCvc" control={control} defaultValue="" rules={{ required: "Обязательное поле!", minLength: 3 }} render={({ field }) => (
                    <InputMask
                        mask="999"
                        maskChar=''
                        autoComplete="cc-scs"
                        className={classes.input}
                        placeholder="CVC"
                        style={errors.cardCvc && { backgroundColor: "#ffd2d2" }}
                        {...field}
                    >
                        {(inputProps) => <div className={classes.cvcContainer}>
                            <input  {...inputProps} type={cvcVisible ? "tel" : "password"} />
                            <button type='button'><img src={cardImage} alt="" onClick={() => setCvcVisible(prev => !prev)} /></button>
                        </div>}
                    </InputMask>
                )}
                />
                <div className={classes.image}>
                    <img src={cardInfoImage} alt="" />
                </div>
            </div>}
    </div>
    );
};

export default PaymentForm;