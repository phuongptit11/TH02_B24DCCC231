import React from "react";
import { Routes, Route } from "react-router-dom";
import CountryList from "./CountryList";
import CountryDetail from "./CountryDetail";

const CountryLookup: React.FC = () => {
  return (
    <Routes>
      <Route index element={<CountryList />} />
      <Route path=":countryName" element={<CountryDetail />} />
    </Routes>
  );
};

export default CountryLookup;
