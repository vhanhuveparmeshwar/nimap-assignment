
import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import './style.css'

const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = React.useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/top-rated">Top Rated</Link>
      <Link to="/upcoming">Upcoming</Link>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
