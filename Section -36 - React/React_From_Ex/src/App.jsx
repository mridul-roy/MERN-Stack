import { useState } from 'react'
import './App.css'

function App() {
  const [headingText, setHeadingText] = useState('Hello');

  function handleTextOver(event){
    setHeadingText(event.target.value)
  }
 

  return (
    <div>
      <h1>Login</h1>
      <h2>{headingText}</h2>
      <input onChange={handleTextOver} type="text" placeholder="FirstName"/>
      <input type="text" placeholder='LastName'/> 
      <input type="password" placeholder="Password"/>
      <input type="email" placeholder="Email"/>
      <input type="number" placeholder="Phone"/>
      <button>Login</button>

      
    </div>
  )
}

export default App
