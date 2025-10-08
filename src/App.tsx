import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CountryLookup from "./components/CountryLookup/CountryLookup";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";
import MovieSearch from "./components/MovieSearch/MovieSearch";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <Link to="/countries">Country Lookup</Link>
        <Link to="/currency">Currency Converter</Link>
        <Link to="/movies">Movie Search</Link>
      </nav>
      <Routes>
        <Route path="/countries/*" element={<CountryLookup />} />
        <Route path="/currency" element={<CurrencyConverter />} />
        <Route path="/movies/*" element={<MovieSearch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
