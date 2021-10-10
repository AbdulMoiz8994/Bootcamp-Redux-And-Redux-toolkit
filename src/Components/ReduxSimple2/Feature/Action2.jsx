export const Increment='INCREMENT';
export const Decrement='DECREMENT';



export const ActionTypeInc=() =>{
   return{
       type: Increment,
       
   }
}
export const ActionTypeDec=() =>({
    type: Decrement,
})