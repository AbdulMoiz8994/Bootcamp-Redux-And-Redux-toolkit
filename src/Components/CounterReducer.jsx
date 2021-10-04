const initailValue={
    counter: 5,
}
// it take stwo parameter state and action and we will provide by default value to ou state
export const CounterReducer=(state=initailValue,action) =>{
   switch(action.type){
       case 'INCREMENT':
           return {
               ...state,
               counter: state.counter +1
           }
           case 'DECREMENT':
           return{
               ...state,
               counter: state.counter -1 
           }
           default:
               return {...state}
   }
}