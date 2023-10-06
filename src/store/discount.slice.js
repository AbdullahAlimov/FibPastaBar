import { createSlice } from '@reduxjs/toolkit'

export const discountSlice = createSlice({
    name: 'discount',
    initialState: {
        value: {
            type:"number",
            value:0,
            min_amount:0
        }
    },
    reducers: {
        setDiscount: (state, { payload }) => {
            state.value = payload.value;
            state.min_amount=payload.min_amount;
            state.type=payload.type;
        }
    }
})

export const { actions, reducer } = discountSlice;