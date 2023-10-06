import React from 'react';
import classes from './StocksDetail.module.scss'

const StocksDetail = ({ item }) => {
    return (
        <div className={classes.content}>
            <div className={classes.image}>
                <img src={`./image/${item.image}`} alt="" />
            </div>
            <p className={classes.name}>{item.name}</p>
            <p className={classes.description}>{item.medium_description}</p>
        </div>
    );
};

export default StocksDetail;