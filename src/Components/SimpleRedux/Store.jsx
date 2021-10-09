import { createStore } from 'redux'
import {ReducerFunc} from './Reducer'

export const store=createStore(ReducerFunc);