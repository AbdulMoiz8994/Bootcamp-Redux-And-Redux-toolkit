import React from 'react'
import {useDispatch} from 'react-redux'

export const CounterLogic = () => {
    const dispatch=useDispatch()
    return (
        <div>
            <button onClick={() => dispatch({
                type: 'INCREMENT'
            })} >+</button>
            <button onClick={() => dispatch({
                type: 'DECREMENT'
            })}>-</button>
        </div>
    )
}
