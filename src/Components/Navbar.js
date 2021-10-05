import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {userLogout} from '../actions';
import './Navbar.css';

function Navbar({auth, userLogout}) {
  async function onLogout() {
    await userLogout();
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <Link className="navbar-brand" to="/">
        <i class="fas fa-hamburger text-dark fa-2x"></i>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link text-white navItem" to="/">
              Burger Builder
            </Link>
          </li>
          {!auth && (
            <li className="nav-item">
              <Link className="nav-link text-white navItem" to="/authenticate">
                Authenticate
              </Link>
            </li>
          )}
          {auth && (
            <li className="nav-item">
              <Link className="nav-link text-white navItem" to="/orders">
                Orders
              </Link>
            </li>
          )}
          {auth && (
            <li className="nav-item">
              <Link className="nav-link text-white navItem" onClick={onLogout}>
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

function mapStateToProps(state) {
  return {auth: state.auth};
}

export default connect(mapStateToProps, {userLogout})(Navbar);
