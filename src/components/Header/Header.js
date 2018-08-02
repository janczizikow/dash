import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row } from '../Layout';

import './Header.css';

const Header = () => (
  <header className="header">
    <Container>
      <Row gutters={false} middle between style={{ height: '3.625rem' }}>
        <NavLink to="/" className="header__logo">
          Logo
        </NavLink>
        <div className="header__links">
          <NavLink to="/" className="header__link-item">
            Home
          </NavLink>
          <NavLink to="/" className="header__link-item">
            Home
          </NavLink>
        </div>
      </Row>
    </Container>
  </header>
);

export default Header;
