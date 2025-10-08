import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Country {
  name: { common: string };
  flags: { png: string };
  population: number;
  region: string;
}

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get<Country[]>("https://restcountries.com/v3.1/all?fields=name,flags,population,region")
      .then(res => setCountries(res.data));
  }, []);

  const filtered = countries.filter(c =>
    c.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search country..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul>
        {filtered.map(c => (
          <li key={c.name.common}>
            <Link to={c.name.common}>
              <img src={c.flags.png} alt={c.name.common} width={30} /> {c.name.common} - {c.population} - {c.region}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
