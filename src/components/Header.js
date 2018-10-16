import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <nav className="navbar navbar-dark mb-3">
      <div className="container">
        <img
          src="/img/instanttimes-logo-mobile.png"
          className="img-fluid d-sm-none mx-auto"
          alt="InstantTimes"
        />
        <span className="navbar-brand accent-heading d-none d-sm-block">
          InstantTimes
        </span>
        <span className="navbar-text">
          Easily check cooking times for your Instant Pot
        </span>
      </div>
    </nav>
  </header>
);
export default Header;
