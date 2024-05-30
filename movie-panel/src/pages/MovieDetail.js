

import React, { useEffect, useState } from 'react';
import { fetchMovieDetails, fetchMovieCast } from '../api';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieDetails(id).then(response => setMovie(response.data));
    fetchMovieCast(id).then(response => setCast(response.data.cast));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
      <div className="movie-header">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="movie-info">
          <h1 className='title'>{movie.title}</h1>
          <p className='overview'>{movie.overview}</p>
          <p className='date'>Release Date: {movie.release_date}</p>
          <p className='rating'>Rating: {movie.vote_average}</p>
        </div>
      </div>
      <h2>Cast</h2>
      <div className="cast-list">
        {cast.map(member => (
          <div key={member.cast_id} className="cast-member">
            <img
              src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
              alt={member.name}
            />
            <p className='name'>{member.name} as {member.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetail;

