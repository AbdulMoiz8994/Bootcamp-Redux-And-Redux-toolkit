import React,{useState} from 'react'
import './App.css';
import {CounterLogic, CounterValue} from './Components/index'

function App() {

  const [counter, setCounter]=useState(0)

  return (
    <div className="App">
    <CounterValue  />
    <CounterLogic/>
    </div>
  );
}

export default App;
