import './App.css'
import Login from './conponents/Login'
import Registration from './conponents/Registration';

const isRegistered = true;

function App() {

  return (
    isRegistered ? <Login /> : <Registration /> 
       
  )
}

export default App
