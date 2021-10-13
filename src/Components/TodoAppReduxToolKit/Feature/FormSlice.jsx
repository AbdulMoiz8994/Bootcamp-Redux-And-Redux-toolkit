// import React from 'react'
import {createSlice} from '@reduxjs/toolkit'



const initialState={
    names: 'khan',
    fatherName: "zafar ali",
}


export const FormSlice=createSlice({
    name: 'forms',
    initialState,
    reducers:{
        addValue:(state,action) =>{
            console.log(action.payload);
            //  state.names=  action.payload;
             state.fatherName=  action.payload
        }
    }
})


// we have to export it to make the dispatch call as a function
export const {addValue}=FormSlice.actions;

// make the splice as well
export const selectform=(state) =>({...state.forms})


export default FormSlice.reducer
