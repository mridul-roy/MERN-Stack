import './App.css'

const fName = "MRIDUL"
const lName = "ROY"

const d = new Date()
var year = d.getFullYear()


function App() {
  return (
  <div>
  <h1>Favourite Movies</h1>
  <ul>
    <li>Interstaler</li>
    <li>Inception</li>
    <li>Life is Beautiful</li>
  </ul>
  <h2>Hello, {fName}</h2>
  <p>My Lucky Number is : {Math.floor(Math.random() * 10)}</p>
  <br></br>
  <h3>Created by {fName + " " + lName}</h3>
  <p>copyright@ {year}</p>


  
  </div>

  )

}

export default App
