import counterReducer from '../Feature/counterSlice';
import {configureStore} from '@reduxjs/toolkit'


export const store=configureStore({
    reducer:{
        counters: counterReducer
    }
})