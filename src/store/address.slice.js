import { createSlice } from '@reduxjs/toolkit'

export const addressSlice = createSlice({
    name: 'address',
    initialState: {
        value: {
            city: "",
            street: "",
            house: "",
            entrance: "",
            floor: "",
            flat: "",
            name: "",
            comment: ""
        }
    },
    reducers: {
        changeAddress: (state, { payload }) => {
            state.value = payload;
        }
    }
})

export const { actions, reducer } = addressSlice;