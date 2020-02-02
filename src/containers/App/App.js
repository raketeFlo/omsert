import React, { useEffect, useState } from 'react';
import CountryList from '../CountryList/CountryList';
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterBar from '../../components/FilterBar/FilterBar';
import { getCountries } from '../../services/ApiClient';
import './App.css';

require('dotenv').config();

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);

  const onSelect = (userInput) => {
    const selected = countries.find((country) => country.name === userInput);
    if (selected) setSelectedCountry([selected]);
    else setSelectedCountry([]);
  };

  const removeSelection = (currentInput) => {
    if (!currentInput) setSelectedCountry([]);
  };

  const filterCountries = (event) => {
    const filter = event.target.textContent.toLowerCase();
    const filtered = [...countries].sort((a, b) => {
      if (a[filter] < b[filter]) return -1;
      if (a[filter] > b[filter]) return 1;
      return 0;
    });
    setCountries(filtered);
  };

  const changeOrder = () => {
    setCountries([...countries].reverse());
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCountries();
      setCountries(res);
    };
    fetchData();
  }, []);
  return (
    <div className="App-Container">
      <SearchBar
        countryList={countries}
        addSelected={onSelect}
        empty={removeSelection}
      />
      <FilterBar
        handleFilter={filterCountries}
        reverse={changeOrder}
      />
      <CountryList
        countryList={selectedCountry.length ? selectedCountry : countries}
      />
    </div>
  );
}

export default App;
