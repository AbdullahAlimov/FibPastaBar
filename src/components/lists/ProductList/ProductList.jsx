import React from 'react';
import PizzaItem from './ProductItem/ProductItem';
import classes from "./ProductList.module.scss"

const PizzaList = ({ pizzas, title, id }) => {
    return (
        <div className={classes.container} id={id}>
            <p className={classes.title}>{title}</p>
            <div className={classes.content}>
                {
                    pizzas.map((item) => {
                        return (<PizzaItem item={item} key={item.id}>
                        </PizzaItem>)
                    })
                }
            </div>
        </div>
    );
};

export default PizzaList;