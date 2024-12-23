import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Note from './components/Note'
import Notes_items from './components/Notes_items'

function CreateNotes(Notes_items){
  return <Note 
  key = {Notes_items.id}
  title = {Notes_items.title}
  content = {Notes_items.content}
  />
}


function App() {

  return (
    <div>
      <Header />
      {Notes_items.map(CreateNotes)}
      <Footer />
      
    </div>
    
  )
}

export default App
