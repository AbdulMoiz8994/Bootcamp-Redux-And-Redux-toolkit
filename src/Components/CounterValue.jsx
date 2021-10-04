import React from 'react'
import {useSelector} from 'react-redux'

export const CounterValue = () => {
    const obj=useSelector((state) => {
     return   ({
         counter: state.counter
    })
    })

    return (
        <div>
            <h1>The Counter Value:{obj.counter}</h1>
        </div>
    )
}
