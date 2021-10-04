import React from 'react'

export const CounterLogic = (props) => {
    console.log(props);
    return (
        <div>
            <button onClick={() => props.setcounter(props.counter +1)} >+</button>
            <button onClick={() => props.setcounter(props.counter -1)}>-</button>
        </div>
    )
}
