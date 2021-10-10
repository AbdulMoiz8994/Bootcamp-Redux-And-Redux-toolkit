import React,{useState} from 'react'
import './App.css';
// import {CounterLogic, CounterValue} from './Components/index'
// import {CounterUI} from './Components/SimpleRedux/CounterUI'
// import {ActAndDisp} from './Components/SimpleRedux/ActAndDisp'
// import {CounterLogic} from './Components/ReduxToolKit2/Feature/CounterLogic'
// import {CounterValue} from './Components/ReduxToolKit2/Feature/CounterValue'


// simple Redux 2
import {CounterDispatch} from './Components/ReduxSimple2/Feature/CounterDisp'
import {CounterUi} from './Components/ReduxSimple2/Feature/CounterUi'


function App() {

  // const [counter, setCounter]=useState(0)

  return (
    <div className="App">
    {/* <CounterValue  /> */}
    {/* <CounterLogic/> */}
    {/* <CounterUI/> */}
    {/* <ActAndDisp/> */}
    {/* <CounterLogic/>
    <CounterValue/> */}

<CounterUi/>
<CounterDispatch/>


    </div>
  );
}

export default App;
