import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {ActionTypeInc, ActionTypeDec} from './Action2'

export const CounterDispatch=() =>{
   
    const dispatch=useDispatch()

   const [data, setData]=useState(0)


return(
    <div>
        <button onClick={() => dispatch(ActionTypeInc())}>+</button>
        <button onClick={() => dispatch(ActionTypeDec())}>-</button>
        <input value={data} onChange={(e) => setData(e.target.value)} />
        <button onClick={() => dispatch({
            type: 'INCREMENTBYVALUE',
            payload: Number(data)
        })}>INCREMNT By Amount</button>  
    </div>
)


}