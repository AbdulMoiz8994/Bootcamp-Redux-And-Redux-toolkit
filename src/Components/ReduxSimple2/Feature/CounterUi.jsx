import React from 'react'
import {useSelector} from 'react-redux'



export const CounterUi = () => {

    const counter=useSelector((state) => state.count)
    return (
        <div>
            <h1>{counter}</h1>
        </div>
    )
}
