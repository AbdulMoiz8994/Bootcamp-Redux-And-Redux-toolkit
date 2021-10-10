// import {} from './'
import {Increment, Decrement} from './Action2'

const initialState={
    count: 0
}

export const CounterReducer=(state=initialState,action) =>{
    switch(action.type){
        case Increment:
            return {...state,count: state.count+1}
         case Decrement:
             return{...state, count: state.count-1}    
          case 'INCREMENTBYVALUE':
              return {...state, count: state.count+action.payload}   
             default:
                 return {...state}   
    };
};

