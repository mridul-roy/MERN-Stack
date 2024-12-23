import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Note from './components/Note'
import Notes_items from './components/Notes_items'


function App() {

  return (
    <div>
      <Header />
      <Note 
      title = {Notes_items[0].title}
      content = {Notes_items[0].content}
      
      />

      <Note
      title = {Notes_items[1].title}
      content = {Notes_items[1].content}
      />
      <Footer />
      
    </div>
    
  )
}

export default App
