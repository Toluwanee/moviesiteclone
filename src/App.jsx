import React, {useState} from 'react';

import './App.css';
import MovieList from './components/MovieList';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const App = () => {
  const [movies, setMovies] = useState([
    {
      Title: 'the_boogeyman',
      Year: '2023',
      Type: 'Movie',
      Poster: 'https://yts.mx/assets/images/movies/barbie_2023/medium-cover.jpg'
    },
    {
      Title: 'Barbie',
      Year: '2023',
      Type: 'Movie',
      Poster: 'https://yts.mx/assets/images/movies/the_boogeyman_2023/medium-cover.jpg'
    },
    {
      Title: 'Teenage Mutant Ninja Turtle',
      Year: '2023',
      Type: 'Movie',
      Poster: 'https://yts.mx/assets/images/movies/teenage_mutant_ninja_turtles_mutant_mayhem_2023/medium-cover.jpg'
    },
    {
      Title: 'the_last_voyage_of_the_demeter_2023',
      Year: '2023',
      Type: 'Movie',
      Poster: 'https://yts.mx/assets/images/movies/the_last_voyage_of_the_demeter_2023/medium-cover.jpg'
    },

  ])
   return (
    <div>
      <Header/>
      <MovieList movies={movies}/>
      <Main/>
      <Footer/>
      
    </div>
   )
}

export default App;
