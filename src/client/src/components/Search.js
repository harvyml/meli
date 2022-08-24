import React from 'react';
import '../assets/components/search.scss';

function Search() {
  return (
    <div className="search-container flex row">
      <input placeholder="Search..." className="search" />
      <div className="search-icon-container">
        <img className="search-icon" src="./assets/icons/search-icon.svg" />
      </div>
    </div>
  );
}

export default Search;
