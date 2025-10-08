import React, { useEffect, useState } from "react";
import axios from "axios";

interface Rates {
  [key: string]: number;
}

const CurrencyConverter: React.FC = () => {
  const [base, setBase] = useState("USD");
  const [rates, setRates] = useState<Rates>({});
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    axios.get(`https://open.er-api.com/v6/latest/${base}`)
      .then(res => setRates(res.data.rates));
  }, [base]);

  return (
    <div>
      <input value={amount} type="number" onChange={e => setAmount(Number(e.target.value))} />
      <select value={base} onChange={e => setBase(e.target.value)}>
        {Object.keys(rates).map(r => <option key={r} value={r}>{r}</option>)}
      </select>
      <ul>
        {Object.entries(rates).map(([key, rate]) => (
          <li key={key}>{key}: {(rate * amount).toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyConverter;
