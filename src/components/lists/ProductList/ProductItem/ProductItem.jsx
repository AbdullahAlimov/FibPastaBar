import React, { useState } from 'react';
import classes from "./ProductItem.module.scss"
import YellowButton from '../../../UI/button/YellowButton/YellowButton';
import Modal from '../../../UI/Modal/Modal';
import BuyingPizza from '../../../modalContent/BuyingPizza/BuyingPizza';
import BuyingAnother from '../../../modalContent/BuyingAnother/BuyingAnother';

const PizzaItem = ({ item }) => {
    const [modalValue, setModalValue] = useState(false)
    return (
        <div className={classes.container}>
            <div className={classes.image}>
                <img src={`./image/${item.image}`} alt='' onClick={() => setModalValue(true)}></img>
            </div>
            <p className={classes.name}>{item.name}</p>
            <p className={classes.description}>{item.composition ? item.composition.join(", ") : item.description} {item.weight?`${item.weight} г.`:``}</p>
            <p className={classes.price}>от {item.price} ₽</p>
            <YellowButton width="126px" height="36px" fontSize="14px" onClick={() => setModalValue(true)}>В корзину</YellowButton>
            {
                    (item.dateAdded && +(item.dateAdded.split("-")[1])) > 7
                    ? <div className={classes.new}>NEW</div>
                    : <div></div>
            }
            <Modal value={modalValue} changeValue={setModalValue}>
                {item.type === "pizza" ? <BuyingPizza item={item} setModalValue={setModalValue}></BuyingPizza> : <BuyingAnother item={item} setModalValue={setModalValue}></BuyingAnother>}
            </Modal>
        </div>
    );
};

export default PizzaItem;