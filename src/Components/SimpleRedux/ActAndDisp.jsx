import React, { useState } from 'react'
import {useDispatch} from 'react-redux'


export const ActAndDisp = () => {
    
   const dispatch=useDispatch()
   const [value, setValue]=useState(0)
    return (
        <div>
             <button onClick={() => dispatch({
                 type: 'INCREMENT'
             })}>+</button>  
             <button onClick={() => dispatch({
                 type: 'DECREMENT'
             })}>-</button>
             <input onChange={(e) => setValue(e.target.value)} />
             <button onClick={() => dispatch({
                 type: 'INCREMNT_BY_VALUE',
                 payload: Number(value),
             })}>Add By Value</button>
        </div>
    )
}
