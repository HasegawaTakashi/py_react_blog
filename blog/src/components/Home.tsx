import './Home.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [genres, setGenres] = useState<string[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const res = await fetch('http://localhost:5000/api/genres');
      const data = await res.json();
      setGenres(data);
    };

    fetchGenres();
  }, []);

  return (
    <div>
      <h1>My Blog</h1>
      <h2>Genres</h2>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>
            <Link to={`/genre/${genre}`}>{genre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
