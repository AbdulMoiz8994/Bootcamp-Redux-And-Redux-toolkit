import {configureStore} from '@reduxjs/toolkit'
import CounterReducer from '../Feature/CounterSlice'


export const store = configureStore({
    reducer:{
        counters: CounterReducer
    }
})