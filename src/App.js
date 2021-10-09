import React,{useState} from 'react'
import './App.css';
// import {CounterLogic, CounterValue} from './Components/index'
// import {CounterUI} from './Components/SimpleRedux/CounterUI'
// import {ActAndDisp} from './Components/SimpleRedux/ActAndDisp'
import {CounterLogic} from './Components/ReduxToolKit2/Feature/CounterLogic'
import {CounterValue} from './Components/ReduxToolKit2/Feature/CounterValue'
function App() {

  const [counter, setCounter]=useState(0)

  return (
    <div className="App">
    {/* <CounterValue  /> */}
    {/* <CounterLogic/> */}
    {/* <CounterUI/> */}
    {/* <ActAndDisp/> */}
    <CounterLogic/>
    <CounterValue/>
    </div>
  );
}

export default App;
