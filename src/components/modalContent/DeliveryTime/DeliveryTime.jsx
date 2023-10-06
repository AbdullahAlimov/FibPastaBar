import React, { useState, useEffect } from 'react';
import classes from "./DeliveryTime.module.scss"
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../store/deliveryTime.slice';

const DeliveryTime = () => {
    const [timeList, setTimeList] = useState([]);
    const time = new Date();

    const deliveryTime = useSelector(state => state.deliveryTime)
    const dispatch = useDispatch();

    const timeText = () => {
        let tempList = [];
        for (let i = Math.ceil(time.getHours()) >= 9 ? Math.ceil(time.getHours()) + 1 : 9; i <= 21; i = i + 0.5) {
            if (i % 1) {
                tempList.push(`${Math.floor(i).toString().padStart(2, '0')}:30 - ${(Math.floor(i) + 1).toString().padStart(2, '0')}:00`);
            } else {
                tempList.push(`${i.toString().padStart(2, '0')}:00 - ${i.toString().padStart(2, '0')}:30`);
            }
        }
        return tempList;
    };

    useEffect(() => {
        setTimeList(timeText());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={classes.container} >
            <p className={classes.title}>Время доставки</p>
            <ul className={classes.content}>
                <li className={deliveryTime.value === "fast" ? `${classes.itemActive}` : ""} onClick={() => { dispatch(actions.changeTime("fast")) }}>Побыстрее</li>
                {
                    timeList.map((timeItem, index) => {
                        return (<li className={deliveryTime.value === timeItem ? `${classes.itemActive}` : ""} key={index} onClick={() => { dispatch(actions.changeTime(timeItem)); }}>{timeItem}</li>)
                    })
                }
            </ul>
        </div>
    );
};

export default DeliveryTime;