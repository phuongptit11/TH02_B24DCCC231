import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";

const MovieSearch: React.FC = () => {
  return (
    <Routes>
      <Route index element={<MovieList />} />
      <Route path=":imdbID" element={<MovieDetail />} />
    </Routes>
  );
};

export default MovieSearch;
