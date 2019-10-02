import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieCard from './MovieCard'

const MovieList = props => {
  const [movies, setMovies] = useState([])


  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        // <Link to={`movies/${movie.id}`}>
        <MovieDetails {...props} key={movie.id} movie={movie} />
        // </Link>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  console.log("Movie Details", props.movie.id);

  const routeToMovie = event => {
    event.preventDefault();
    props.history.push(`movies/${props.movie.id}`);
  };

  return <MovieCard link={routeToMovie} movie={props.movie} />
  // const { title, director, metascore, stars, id } = props.movie;

  // return (
  //   <div onClick={routeToMovie} className="movie-card">
  //     <h2>{title}</h2>
  //     <div className="movie-director">
  //       Director: <em>{director}</em>
  //     </div>
  //     <div className="movie-metascore">
  //       Metascore: <strong>{metascore}</strong>
  //     </div>
  //     <h3>Actors</h3>

  //     {stars.map(star => (
  //       <div key={star} className="movie-star">
  //         {star}
  //       </div>
  //     ))}
  //   </div>
  // );
}

export default MovieList;
