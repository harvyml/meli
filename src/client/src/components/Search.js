import React, { useState } from 'react';
import '../assets/styles/search.scss';

function Search({ search, setSearch }) {
  return (
    <div className="search-container flex row">
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search..."
        className="search"
      />
      <div className="search-icon-container flex row column justify-center">
        <img className="search-icon" src="./assets/icons/search-icon.svg" />
      </div>
    </div>
  );
}

export default Search;
