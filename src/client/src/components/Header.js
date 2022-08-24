import React from 'react';
import '../assets/header.scss';
import Search from './search';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="flex row space-around">
          <img src="./assets/logo.png" style={{ width: 50, height: 50 }} />
          <Search />
        </div>
      </div>
    </header>
  );
}

export default Header;
