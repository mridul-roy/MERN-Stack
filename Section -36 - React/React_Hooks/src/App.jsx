import './App.css'
import { useState } from 'react'

function App() {
  // const [count, setState] = useState(0);

  // function Clicked(){
  //   setState(count + 1);
  // }

  // function Clicked_Decrice(){
  //   setState(count - 1);
  // }


  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);
  
  function LocalTimeClock(){
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };

  setInterval(LocalTimeClock, 1000);


  
  return (
    <div>
      {/* <h1>{count}</h1>
      <button onClick={Clicked}>+</button>
      <button onClick={Clicked_Decrice}>-</button> */}
      <h1>{time}</h1>
      {/* <button onClick={LocalTimeClock}>Get Time</button> */}
    </div>
  )
  
}

export default App
