import React from 'react';
import { Container, Row } from '../Layout';

import './Footer.css';

const Footer = () => (
  <div className="footer">
    <Container>
      <Row gutters={false} between>
        <p className="footer__legal">
          &copy; {new Date().getFullYear()} Designed and built by{' '}
          <a
            href="https://www.janczizikow.com"
            rel="noopener noreferrer"
            target="_blank"
            className="footer__link"
          >
            Jan Czizikow
          </a>
        </p>
      </Row>
    </Container>
  </div>
);

export default Footer;
