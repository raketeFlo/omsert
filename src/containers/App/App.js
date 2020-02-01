import React, { useEffect, useState } from 'react';
import CountryList from '../CountryList/CountryList';
import { getCountries } from '../../services/ApiClient';
import './App.css';

require('dotenv').config();

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getCountries();
      setCountries(res);
    };
    fetchData();
  }, []);
  return (
    <div className="App-Container">
      <CountryList countryList={countries} />
    </div>
  );
}

export default App;
