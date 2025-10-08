import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  Plot: string;
}

const MovieDetail: React.FC = () => {
  const { imdbID } = useParams<{ imdbID: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (imdbID) {
      axios.get(`https://www.omdbapi.com/?apikey=thewdb&i=${imdbID}&plot=full`)
        .then(res => setMovie(res.data));
    }
  }, [imdbID]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
      <p>Year: {movie.Year}</p>
    </div>
  );
};

export default MovieDetail;
