
import './App.css'
import { useEffect, useState} from 'react'
import axios from "axios"
import { MovieCard } from "./components/MovieCard/MovieCard"

function App() {

  const [movies, setMovies] = useState([])

  const getMovies = async () => {
     try{
      const { data } = await axios.get("https://yts.mx")
      setMovies(data)
     }catch(err){
      console.log(err)
     }
  }

  useEffect(() => {
    getMovies();
  }, [])
  
  return (
    <div className='App'>
      <h1>Movies</h1>
      
      <MovieCard />
    </div>
  )
}

export default App
