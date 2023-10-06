import React from 'react';
import classes from './StocksList.module.scss'
import StocksItem from './StocksItem/StocksItem';

const StocksList = ({ stocks, title }) => {
    return (
        <div className={classes.container}>
            <p className={classes.title}>{title}</p>
            <div className={classes.stocksList}>
                {stocks.map((stock) => {
                    return (
                        <div key={stock.id}>
                            <StocksItem item={stock} key={stock.id}></StocksItem>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default StocksList;