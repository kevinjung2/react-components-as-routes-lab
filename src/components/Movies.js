import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let movieCards = movies.map(movie => {
    return(
      <div>
        <h3>{movie.title}</h3>
        <h3>{movie.time}</h3>
        <ul>
          {movie.genres.map(genre => <li>{genre}</li>)}
        </ul>
      </div>
    )
  })

  return (
    <div>
        <h1>Movies Page</h1>
        {movieCards}
    </div>
  );
};

export default Movies;
