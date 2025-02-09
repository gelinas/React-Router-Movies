import React from 'react';

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  console.log("MovieCard in MovieList", props)
  return (
    <div onClick={props.link} className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map((star, index) => (
          <div key={index} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div onClick={props.saveMovie} className="save-button">Save</div>
    </div>
  );
};

export default MovieCard;
