import React from 'react';
import { directors } from '../data';

const Directors = () => {

  let directorCards = directors.map(director => {
    return(
      <div>
        <h3>{director.name}</h3>
        <ul>
          {director.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorCards}
    </div>
  );
}

export default Directors
