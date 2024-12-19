import './App.css'
import Movie_Card from './components/Wished_List'
import list from './components/List'
import Header from './Header'
import Footer from './Footer'

function createCard(list){
  return <Movie_Card 
  key = {list.id}
  name = {list.name}
  genre = {list.genre}
  img = {list.img}
  about = {list.about}
  
  />
}

function App() {
  return (
    <div>
    <Header />
    {list.map(createCard)}


    {/* <Movie_Card 
    name = {list[0].name}
    genre = {list[0].genre}
    img = {list[0].img}
    about = {list[0].about}
    />

    <Movie_Card
    name = {list[1].name}
    genre = {list[1].genre}
    img = {list[1].img}
    about = {list[1].about}  
    
    />

    < Movie_Card 
        name = {list[2].name}
        genre = {list[2].genre}
        img = {list[2].img}
        about = {list[2].about}  
    /> */}
    <Footer />
    </div>
  )
}

export default App
