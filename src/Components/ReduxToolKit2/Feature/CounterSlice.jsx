import {createSlice} from '@reduxjs/toolkit'


let initialState={
    value: 0
}

export const counterSlice =createSlice({
    name: 'counters',
    initialState,
    reducers:{
        increment:(state)=>{
             state.value+=1
        },
        decrement:(state) =>{
            state.value-=1
        },
        incrementByValue:(state,action) =>{
           state.value= state.value+action.payload
        }
    }
})

export const {increment,decrement,incrementByValue} =counterSlice.actions;

// make Slice
export const selectCounterValue=(state) => state.counters.value

export default counterSlice.reducer