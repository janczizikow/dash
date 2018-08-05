import React from 'react';
import { Container, Row } from '../Layout';

const Footer = props => (
  <div className="footer">
    <Container>
      <Row between>
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
