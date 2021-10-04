import React from 'react'
import {useSelector} from 'react-redux'

export const CounterValue = () => {
    const counter=useSelector((state) => state.counter)
    return (
        <div>
            <h1>The Counter Value:{counter}</h1>
        </div>
    )
}
