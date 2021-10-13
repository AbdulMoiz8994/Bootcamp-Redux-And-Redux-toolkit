import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addValue,selectform} from './FormSlice'

export const FormUi = () => {


    let [data, setData]=useState({names: 'moiz', fatherName: "zafar ali khan"})

    
   const dispatch=useDispatch();
  
   let realData=useSelector(selectform)
   console.log(realData);

    // console.log(addValue);
   const {names,fatherName}=realData 
   console.log(names, fatherName );
   
const addUser=(e)=>{
e.preventDefault();
 setData(e.target.value)
}

    return (
        <div>
            {/* <h1>{name}</h1>
            <h2>{fatherName}</h2>
            <h3>{age}</h3>
            <h4>{gender}</h4> */}
            {/* {names} */}


         <input type="text" value={data.names} onChange={addUser} />   
         <input type="text" value={data.fatherName} onChange={addUser} />
         <button onClick={() => dispatch(addValue(data))}>Add Data</button>
         {console.log(data)}
         {/* <h1>{data}</h1> */}
         <h1>{names}</h1>
         <h2>{fatherName}</h2>
{/* 
            <form onChange={(e) =>{
                e.preventDefault()
                const obj={...data}
                setData(obj)
                console.log(obj);
            }}
              onSubmit={e => e.preventDefault()

            }
            >
                <input type="text" value={data.name} placeholder="name" />
                <input type="text" value={data.fatherName} placeholder="fatherName" />
                <input type="text" value={data.age} placeholder="age" />
                <input type="text" value={data.gender} placeholder="gender" />
                  <input type="submit" value="Add"/>
            </form> */}
        </div>
    )
}
