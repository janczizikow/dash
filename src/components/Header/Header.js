import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';

import { Container, Row } from '../Layout';

import './Header.css';

const Header = () => (
  <header className="header header--fixed">
    <Container fluid>
      <Row gutters={false} middle between className="header__inner">
        <NavLink to="/" className="header__logo">
          Logo
        </NavLink>
        <button type="button" className="header__toggle">
          <MdMenu size={24} style={{ verticalAlign: 'middle' }} />
        </button>
        <div className="header__links">
          <NavLink
            exact
            to="/"
            className="header__link-item"
            activeClassName="header__link-item--active"
          >
            Home
          </NavLink>
          <NavLink
            to="/login"
            className="header__link-item"
            activeClassName="header__link-item--active"
          >
            Log in
          </NavLink>
          <NavLink
            to="/signup"
            className="header__link-item"
            activeClassName="header__link-item--active"
          >
            Sign up
          </NavLink>
        </div>
      </Row>
    </Container>
  </header>
);

export default Header;
