import './App.css'
import add,{subtract,multiple,devide} from './components/calculator'

function App() {
  return(
    <div>
      <p>Calculated function result:</p>
      <ul>
        <li>{add(1,2)}</li>
        <li>{subtract(9,4)}</li>
        <li>{multiple(3,4)}</li>
        <li>{devide(20,5)}</li>
      </ul>
      
    </div>
  )
  
}

export default App
