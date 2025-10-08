import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

const MovieList: React.FC = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = () => {
    axios.get(`https://www.omdbapi.com/?apikey=thewdb&s=${search}`)
      .then(res => setMovies(res.data.Search || []));
  };

  return (
    <div>
      <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search movie..." />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {movies.map(m => (
          <li key={m.imdbID}>
            <Link to={m.imdbID}>
              <img src={m.Poster} alt={m.Title} width={50} /> {m.Title} ({m.Year})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
