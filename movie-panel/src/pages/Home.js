
import React, { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../api';
import MovieCard from '../components/MovieCard';
import './Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies().then(response => setMovies(response.data.results));
  }, []);

  return (
    <div className="home">
      <h1 className='title'>Popular Movies</h1>
      <div className="movie-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
