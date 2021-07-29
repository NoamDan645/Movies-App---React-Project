import './App.css';
import React, { useState, useEffect } from 'react';
import MovieList from './comp/MovieList';


const API_MOVIES = 'http://www.omdbapi.com/?s=drama&apikey=632b618a';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState('')
  useEffect(() => {
    fetch('http://www.omdbapi.com/?s=drama&apikey=632b618a')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.Search)
      })
  }, [])
  
  const filterMovie = movies.filter(movie => {
    return movie.Title.toLowerCase().includes(searchMovie.toLowerCase())
  })
  return (
    <div className="App">
      <header>

        <input
          className="search"
          type="search"
          placeholder="Search..."
          onChange={e => setSearchMovie(e.target.value)}

        />
      </header>
      <div className="movie-conatiner">
        {filterMovie.map((movie) => (
          <MovieList key={movie.imdbID} {...movie} />
        ))}

      </div>


    </div>

  )

}

export default App;
