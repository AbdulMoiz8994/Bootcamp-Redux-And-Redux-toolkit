import React, { useState } from 'react'
import {increment,decrement,incrementByValue,selectCounterValue} from './CounterSlice'
import {useDispatch, useSelector} from 'react-redux'

export const CounterLogic = () => {

   const dispatch=useDispatch()
const [value, setValue]=useState(0)
    const counter=useSelector(selectCounterValue)
    return (
        <div> 
                          <h2>Counter:{counter}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
              <input onChange={(e) => setValue(e.target.value)} />
              <button onClick={() => dispatch(incrementByValue(Number(value)))}>Add Value</button>
        </div>
    )
}
