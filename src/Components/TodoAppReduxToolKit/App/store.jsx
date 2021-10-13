import {configureStore} from '@reduxjs/toolkit'
import formReducer from '../Feature/FormSlice'


export const Store=configureStore({
    reducer:{
        forms: formReducer
    }
})