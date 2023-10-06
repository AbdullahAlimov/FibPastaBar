import React, { useState } from 'react';
import classes from "./NewProducts.module.scss"
import Modal from '../UI/Modal/Modal';
import BuyingPizza from '../BuyingPizza/BuyingPizza';

const NewProducts = ({ pizzas }) => {
    const [modalValue, setModalValue] = useState(false);
    return (
        <div className={classes.container}>
            <p className={classes.title}>Новинки</p>
            <ul className={classes.newProduct}>
                {pizzas.map((pizza) => {
                    if (+(pizza.dateAdded.split("-")[1]) > 7) {
                        return (
                            <li className={classes.product}>
                                <div className={classes.content} onClick={()=>{setModalValue(true)}}>
                                    <div className={classes.image}>
                                        <img src={`./image/${pizza.image}`} alt="" />
                                    </div>
                                    <p className={classes.name}>{pizza.name}</p>
                                    <p className={classes.price}>{`от ${pizza.price} ₽`}</p>
                                </div>
                                <Modal key={pizza.id} value={modalValue} changeValue={setModalValue}>
                                    <BuyingPizza item={pizza}></BuyingPizza>
                                </Modal>
                            </li>
                        )
                    }
                })}
            </ul>
        </div>
    );
};

export default NewProducts;