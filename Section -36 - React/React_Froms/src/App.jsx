import './App.css'
import Login from './components/Login'

const isLoggedIn = false;

function App() {

  return (<div> 
    {
      isLoggedIn ? <h1>Welcome</h1> : <Login />
    }
    

  </div>
   
  )
}

export default App
