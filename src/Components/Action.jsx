// we define our dispatch type to use dynamically 
export const Increment='INCREMENT';
export const Decrement= 'DECREMENT';


// make the function
export const IncrementAct=() =>({
     type: Increment
})
export const DecrementAct=() =>({
    type: Decrement
})