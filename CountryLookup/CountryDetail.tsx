import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Country {
  name: { common: string };
  flags: { png: string };
  population: number;
  region: string;
}

const CountryDetail: React.FC = () => {
  const { countryName } = useParams<{ countryName: string }>();
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    if (countryName) {
      axios.get<Country[]>(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(res => setCountry(res.data[0]));
    }
  }, [countryName]);

  if (!country) return <div>Loading...</div>;

  return (
    <div>
      <h2>{country.name.common}</h2>
      <img src={country.flags.png} alt={country.name.common} />
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
    </div>
  );
};

export default CountryDetail;
