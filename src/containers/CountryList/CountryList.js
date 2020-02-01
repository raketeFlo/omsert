import React from 'react';
import './CountryList.css';
import CountryListItem from '../../components/CountryListItem/CountryListItem';

const CountryList = () => {
  return (
    <div className="list-container">
      <CountryListItem />
    </div>
  );
};

export default CountryList;
