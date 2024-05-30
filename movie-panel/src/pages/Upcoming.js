import React, { useEffect, useState } from 'react';
import { fetchUpcomingMovies } from '../api';
import MovieCard from '../components/MovieCard';
import "./Home.css"

const Upcoming = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchUpcomingMovies().then(response => setMovies(response.data.results));
  }, []);

  return (
    <div>
      <h1 className='title'>Upcoming Movies</h1>
      <div className="movie-grid">
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Upcoming;
