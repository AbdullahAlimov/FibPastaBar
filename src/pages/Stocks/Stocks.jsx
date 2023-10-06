import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { StocksService } from '../../services/pizza.services';
import StocksList from '../../components/lists/StocksList/StocksList';

const Stocks = () => {
    const [stocks,setStocks]=useState([]);
    useEffect(()=>{
        const fetchData= async ()=>{
            setStocks(await StocksService.getAll())
        }
        fetchData()
    },[])
    return (
        <div>
            <Header city="Калач-на-Дону"></Header>
                <StocksList stocks={stocks} title={"Акции"}></StocksList>
            <Footer></Footer>
        </div>
    );
};

export default Stocks;