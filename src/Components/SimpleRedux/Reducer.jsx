const initailValue={
    counter:0
}

// The Reducer will be pure function
export const ReducerFunc=(state=initailValue,action) =>{
    switch(action.type){
        case 'INCREMENT':
          return{
              ...state,counter: state.counter +=1
          };
          case 'DECREMENT':
              return{
                  ...state,counter: state.counter -=1
              }
          case  'INCREMNT_BY_VALUE':
              return{
                  ...state, counter: state.counter+ action.payload
              }
              default:{
                   return {...state}
              }     
    }


}

