import './App.css'
import {useState} from "react";

function App() {
const [headingText, setHeadingText] = useState("Hello");

const [isMouseOver, setMouseOver] = useState(false);


function handleClick(){
    setHeadingText("Submitted");
};


// function handleMouseOver(){
//   setMouseOver(true)
    
//     };  



  return (
    <div>
      <h1>Login</h1>
      <h2>{headingText}</h2>
      <input type="text" placeholder="Username"/>
      <input type="password" placeholder="Password"/>
      <button onClick={handleClick} onMouseOver={handleMouseOver} style={{backgroundColor: isMouseOver? "green" : "white"}}>Login</button>

    </div>
  )
}

export default App;
