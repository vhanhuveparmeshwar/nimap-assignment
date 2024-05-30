import React, { useEffect, useState } from 'react';
import { fetchTopRatedMovies } from '../api';
import MovieCard from '../components/MovieCard';
import "./Home.css"

const TopRated = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTopRatedMovies().then(response => setMovies(response.data.results));
  }, []);

  return (
    <div>
      <h1 className='title'>Top Rated Movies</h1>
      <div className="movie-grid">
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default TopRated;
