import React from 'react';
import {useSelector} from 'react-redux'

export const CounterUI = () => {

const counter=useSelector((state) =>{
    return state.counter
})

    return (
        <div>
            counter: {counter}
        </div>
    )
}
