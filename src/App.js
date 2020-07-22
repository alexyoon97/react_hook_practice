import React,{useState} from 'react';
import './App.css';
import useInput from './hooks/useInput'

function App() {
  const [number, setNumber] = useState(1);
  const increaseNumber = () => {setNumber(number + 1)}
  const decreaseNumber = () => {setNumber(number - 1)}
  const maxLen = value => value.length <= number
  const name = useInput("Mr.", maxLen);
  return (
    <div className="container">
      <div className="hook_div"> 
        <input className="text" placeholder="use input hook" {...name}/><br></br>
        Max Length: {number} <button onClick={increaseNumber}>Up</button><button onClick={decreaseNumber}>Down</button>
      </div>
      <div className="hook_div">
        <div className="text">Response</div>
        <button className="btn_hook">Click</button>
      </div>
      <div className="hook_div">
        <div className="text">Response</div>
        <button className="btn_hook">Click</button>
      </div>
      <div className="hook_div">
        <div className="text">Response</div>
        <button className="btn_hook">Click</button>
      </div>
    </div>
  );
}

export default App;
