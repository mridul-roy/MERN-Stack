import './App.css'

const t = new Date();
var time = t.getHours(); 

let greetings;
const customStyle = {
  color : ""
}

if (time < 12){
  greetings = "Good Morning!"
  customStyle.color = "red";
}
else if (time < 18){
  greetings = "Good Afternoon!"
  customStyle.color = "green";
}
else{
  greetings = "Good Night!"
  customStyle.color = "blue";
}



function App() {

  return (
    <>
      <div>
        <h1 className='heading' style={customStyle}>
          {greetings}
        </h1>
      </div>
    </>
  )
}

export default App
