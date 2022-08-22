import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="flex row">
          <img src="./assets/logo.png" style={{ width: 50, height: 50 }} />
        </div>
      </div>
    </header>
  );
}

export default Header;
