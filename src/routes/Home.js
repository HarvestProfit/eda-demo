import React from 'react';
import { Col, Container, Row } from 'reactstrap';

function Home() {
  return (
    <Container>
      <Row>
        <Col xs="12" className="text-center">
          <img src="https://www.harvestprofit.com/harvest-profit-farm-business-software.png" alt="Harvest Profit" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
