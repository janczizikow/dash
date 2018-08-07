import React from 'react';
import { Container, Row } from '../Layout';

import './Footer.css';

const Footer = props => (
  <div className="footer">
    <Container>
      <Row gutters={false} between>
        <p>
          Designed and built by{' '}
          <a
            href="https://www.janczizikow.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Jan Czizikow
          </a>
        </p>
      </Row>
    </Container>
  </div>
);

export default Footer;
