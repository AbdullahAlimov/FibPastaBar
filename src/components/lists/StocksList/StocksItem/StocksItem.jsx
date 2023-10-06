import React, {useState} from 'react';
import classes from "./StocksItem.module.scss"
import YellowButton from '../../../UI/button/YellowButton/YellowButton';
import Modal from '../../../UI/Modal/Modal'
import StocksDetail from '../../../modalContent/StocksDetail/StocksDetail';

const StocksItem = ({ item }) => {
    const [modalValue, setModalValue] = useState(false);
    return (
        <div className={classes.stock}>
            <div className={classes.image}>
                <img src={`./image/${item.image}`} alt="" />
            </div>
            <div className={classes.info}>
                <p className={classes.name}>{item.name}</p>
                <p className={classes.description}>{item.small_description}</p>
                <YellowButton width="159px" height="45px" onClick={() => { setModalValue(true) }}>Посмотреть</YellowButton>
            </div>
            <Modal value={modalValue} changeValue={setModalValue}><StocksDetail item={item} key={item.id}></StocksDetail></Modal>
        </div>
    );
};

export default StocksItem;