import {createSlice} from '@reduxjs/toolkit';


let initialState={
    value:0,
}

export const counteSlice=createSlice({
    name: 'counters',
    initialState,
    reducers:{
        increment:(state) =>{
            state.value +=1
        },
        decrement:(state) =>{
            state.value -=1
        },
        reset:(state) =>{
           state.value=0
        },
        incrementByAmount: (state,action) =>{
            state.value =state.value + action.payload
        }
    }
})

// we have export this to make  dispatch
export const {increment,decrement,reset,incrementByAmount}=counteSlice.actions

// now make action and the slice as well

export const selectCountValue=(state) => state.counters.value 

export default counteSlice.reducer;