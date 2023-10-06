import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {reducer as cartReducers}  from "./cart.slice";
import {reducer as discountReducers} from "./discount.slice";
import {reducer as addressReducers} from "./address.slice";
import {reducer as deliveryTimeReducers} from "./deliveryTime.slice";

const rootReducer = combineReducers({
  discount: discountReducers,
  cart: cartReducers,
  address: addressReducers,
  deliveryTime: deliveryTimeReducers
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({ reducer: persistedReducer,middleware: [] });
export const persistor = persistStore(store);