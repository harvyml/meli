import React, { useState, useEffect } from 'react';
import '../assets/styles/search.scss';

function Search() {
  const [search, setSearch] = useState('');

  function submit(e) {
    e.preventDefault();
    window.location.replace(`/items?search=${search}`);
    return e;
  }

  function onSearchChange(e) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <div className="search-container flex row">
      <form onSubmit={submit}>
        <input
          value={search}
          onChange={onSearchChange}
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
