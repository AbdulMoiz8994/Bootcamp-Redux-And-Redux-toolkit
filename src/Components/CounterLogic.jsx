import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
// import {IncrementAct,DecrementAct}from './Action'
import {increment,decrement,reset,incrementByAmount} from './ReduxToolKit/Feature/counterSlice'

export const CounterLogic = () => {
    const dispatch=useDispatch()

  const [data,setData]=useState(0);

    return (
        <div>
            <button onClick={() => dispatch(increment())}  aria-label="Increment value">+</button>
            <button onClick={() => dispatch(decrement())} aria-label="Decrement value">-</button>
            <button onClick={() => dispatch(reset())} aria-label="Reset value">Reset</button>
             <div>
                 <input value={data} onChange={(e) => setData(e.target.value)} />
                 <button onClick={() => dispatch(incrementByAmount(Number(data)))}>Add Contact</button>
             </div>
        </div>
    )
}
