import React from 'react'
import {useSelector} from  'react-redux'
import {selectCounterValue} from '../Feature/CounterSlice'

export const CounterValue = () => {

const counter=useSelector(selectCounterValue)

    return (
        <div>
            <h1>{counter}</h1>
        </div>
    )
}
