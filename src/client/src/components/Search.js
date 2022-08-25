import React, { useState } from 'react';
import '../assets/styles/search.scss';

function Search({ search, setSearch }) {
  function submit(e) {
    e.preventDefault();
    console.log('search', search);
    window.location.replace(`/items?search=${search}`);
    // window.location.replace(`/items?search=${search}`);
    return true;
  }
  return (
    <div className="search-container flex row">
      <form onSubmit={submit}>
        <input
          value={search}
          onChange={setSearch}
          placeholder="Search..."
          className="search"
        />
      </form>
      <div className="search-icon-container flex row column justify-center">
        <img className="search-icon" src="./assets/icons/search-icon.svg" />
      </div>
    </div>
  );
}

export default Search;
