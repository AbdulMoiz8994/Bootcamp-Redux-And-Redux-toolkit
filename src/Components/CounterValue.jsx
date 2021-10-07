import React from 'react'
import {useSelector} from 'react-redux'
import {selectCountValue} from './ReduxToolKit/Feature/counterSlice'

export const CounterValue = () => {
    // const obj=useSelector((state) => {
    //  return   ({
    //      counter: state.counter
    // })
    // })
    const count=useSelector(selectCountValue)
    console.log(count)
    return (
        <div>
            <h1>The Counter Value:{count}</h1>
        </div>
    )
}
