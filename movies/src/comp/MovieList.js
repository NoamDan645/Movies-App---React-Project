import React from 'react'



const MovieList = ({ Title, Year, imdbID, Poster }) => (

  <div className="movie">
    {<img src={Poster} ></img>}
    <div className="movie-info">
      <h6>{Title}</h6>
      <span>{Year}</span>
    </div>
  </div>
)
export default MovieList