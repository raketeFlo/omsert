import React, { useEffect, useState } from 'react';
import CountryList from '../CountryList/CountryList';
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterBar from '../../components/FilterBar/FilterBar';
import GlobalMap from '../GlobalMap/GlobalMap';
import { getCountries } from '../../services/ApiClient';
import './App.css';

require('dotenv').config();

const App = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [modalCountry, setModalCountry] = useState([]);

  const onSelect = (userInput) => {
    const selected = countries.find((country) => country.name === userInput);
    if (selected) {
      setSelectedCountry([selected]);
      setModalCountry([selected]);
    } else {
      setSelectedCountry([]);
    }
  };

  const changeLocation = (userInput) => {
    const selected = countries.find((country) => country.name === userInput);
    setModalCountry([selected]);
  };

  const removeSelection = (currentInput) => {
    if (!currentInput) setSelectedCountry([]);
  };

  const filterCountries = (check) => {
    const filter = check ? 'name' : 'population';
    const filtered = [...countries].sort((a, b) => {
      if (filter === 'name') {
        if (a[filter] < b[filter]) return -1;
        if (a[filter] > b[filter]) return 1;
        return 0;
      }
      if (a[filter] > b[filter]) return -1;
      if (a[filter] < b[filter]) return 1;
      return 0;
    });
    setCountries(filtered);
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
        resetList={removeSelection}
      />
      <FilterBar
        handleFilter={filterCountries}
      />
      <CountryList
        countryList={selectedCountry.length ? selectedCountry : countries}
        addSelected={changeLocation}
        selectedCountry={modalCountry}
      />
      <GlobalMap
        country={modalCountry}
      />
    </div>
  );
};

export default App;
