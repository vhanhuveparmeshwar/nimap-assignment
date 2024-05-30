import React, { useEffect, useState } from 'react';
import { fetchSearchedMovies } from '../api';
import MovieCard from '../components/MovieCard';
import { useLocation } from 'react-router-dom';
import "./Home.css"

const SearchedMovie = () => {
  const [movies, setMovies] = useState([]);
  const query = new URLSearchParams(useLocation().search).get('query');

  useEffect(() => {
    if (query) {
      fetchSearchedMovies(query).then(response => setMovies(response.data.results));
    }
  }, [query]);

  return (
    <div>
      <h1 className='title'>Search Results</h1>
      <div className="movie-grid">
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default SearchedMovie;
