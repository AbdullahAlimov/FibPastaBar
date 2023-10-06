import { createSlice } from '@reduxjs/toolkit'

const _ = require('lodash');

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {
            value:[]
        }
    },
    reducers: {
        addToCart: (state, { payload }) => {
            state.value.push(payload);
        },
        removeFromCart: (state, { payload }) => {
            const index = state.value.findIndex((item) => item.id === payload.id && (item.composition === payload.composition || item.size === payload.size));
            if (index !== -1) { state.value.splice(index, 1) }
        },
        removeAllFromCart: (state, { payload }) => {
            for (let index = 0; index < state.value.length; index++) {
                if (_.isEqual(state.value[index], payload)) {
                    state.value.splice(index, 1);
                    --index;
                }
            }
        },
    }
})

export const { actions, reducer } = cartSlice;