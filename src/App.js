import React,{useState} from 'react'
import './App.css';
import {CounterLogic, CounterValue} from './Components/index'
import {CounterUI} from './Components/SimpleRedux/CounterUI'
import {ActAndDisp} from './Components/SimpleRedux/ActAndDisp'
function App() {

  const [counter, setCounter]=useState(0)

  return (
    <div className="App">
    {/* <CounterValue  /> */}
    {/* <CounterLogic/> */}
    <CounterUI/>
    <ActAndDisp/>
    </div>
  );
}

export default App;
