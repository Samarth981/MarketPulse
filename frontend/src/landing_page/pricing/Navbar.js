import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar mt-5 mb-3">
      <div className="container-fluid px-3">
        <div className="d-flex align-items-start justify-content-start border-bottom">
          <Link
            className={`navbar-brand fs-4 fw-medium ${
              location.pathname === '/equality'
                ? 'text-dark border-bottom border-2 border-primary pb-1'
                : 'text-muted'
            }`}
            to="/equality"
          >
            Equity
          </Link>
          <Link
            className={`navbar-brand fs-4 fw-medium ${
              location.pathname === '/currency'
                ? 'text-dark border-bottom border-2 border-primary pb-1'
                : 'text-muted'
            }`}
            to="/currency"
          >
            Currency
          </Link>
          <Link
            className={`navbar-brand fs-4 fw-medium ${
              location.pathname === '/commodities'
                ? 'text-dark border-bottom border-2 border-primary pb-1'
                : 'text-muted'
            }`}
            to="/commodities"
          >
            Commodities
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
