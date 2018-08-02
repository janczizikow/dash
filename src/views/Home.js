import React from 'react';
import { Container, Row, Col } from '../components/Layout';

const Home = () => (
  <Container>
    <Row center>
      <Col style={{ border: '1px dashed red' }}>1</Col>
      <Col>2</Col>
      <Col>3</Col>
      <Col>4</Col>
    </Row>
    <Row>
      <Col xs={4} xsOffset={4} lgOffset={0}>
        1
      </Col>
      <Col xs={4} mdOrder={1} lgOffset={0}>
        2
      </Col>
      <Col xs={4} mdOrder={0} lgOffset={0}>
        3
      </Col>
    </Row>
  </Container>
);

export default Home;
