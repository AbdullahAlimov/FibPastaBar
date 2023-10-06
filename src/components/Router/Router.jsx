import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../../pages/Home/Home"
import Contacts from '../../pages/Contacts/Contacts';
import Stocks from '../../pages/Stocks/Stocks'
import Cart from '../../pages/Cart/Cart';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path='/'/>
                <Route element={<Contacts/>} path='/contacts'/>
                <Route element={<Stocks/>} path='/stocks'/>
                <Route element={<Cart/>} path='/cart'/>
                <Route element={<NotFoundPage/>} path='*'/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;