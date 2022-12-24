import React from 'react';

export default function Header(props) {
  return (
    <header className="mb-5">
      <nav className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <div className="col px-0">
            {/* this anchor should go back to the catalog at '#' */}
            <a href="#" className="navbar-brand">
              <i className="fa fa-dollar-sign" /> Wicked Sales
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
