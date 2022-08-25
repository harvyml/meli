import React from 'react';
import '../assets/styles/header.scss';
import Search from './search';

function Header({ search, setSearch }) {
  return (
    <header className="header">
      <div className="container">
        <div className="flex row">
          <img src="./assets/images/logo.png" className="logo" />
          <Search search={search} setSearch={setSearch} />
        </div>
      </div>
    </header>
  );
}

export default Header;
