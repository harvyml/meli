import React from 'react';
import '../assets/styles/header.scss';
import Search from './search';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="flex row">
          <img src="./assets/images/logo.png" className="logo" />
          <Search />
        </div>
      </div>
    </header>
  );
}

export default Header;
