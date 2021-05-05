import React from 'react'
import moviesList from '../MoviesList/data';

export default function MovieDetails(props) {
  console.log('Props', props);

  const getMovie = (id) => {
    return moviesList.find(movie => movie.id == id);
  }

  const foundedMovie = getMovie(props.match.params.id);
  return (
    <div>
      <h1>Movie Details</h1>
      { foundedMovie ? <div>
        <h2>{foundedMovie.title}</h2>
        <p>{foundedMovie.plot}</p>
      </div> :
        <p>Ha ocurrido un error. No hemos podido encontrar la película que buscabas</p>
      }
    </div>
  )
}
