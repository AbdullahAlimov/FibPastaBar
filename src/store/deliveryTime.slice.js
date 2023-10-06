import { createSlice} from '@reduxjs/toolkit'

export const deliveryTimeSlice = createSlice({
    name: 'deliveryTime',
    initialState: {
        value: "fast"
    },
    reducers: {
        changeTime:(state,{payload})=>{
            state.value=payload;
        }
    }
})

export const { actions, reducer } = deliveryTimeSlice;