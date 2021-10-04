import React from 'react'
import {useDispatch} from 'react-redux'
import {IncrementAct,DecrementAct}from './Action'

export const CounterLogic = () => {
    const dispatch=useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(IncrementAct())} >+</button>
            <button onClick={() => dispatch(DecrementAct())}>-</button>
        </div>
    )
}
