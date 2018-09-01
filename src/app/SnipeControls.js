import React from 'react';
import { Row, Col, Button } from 'reactstrap';

const SnipeControls = () => (
  <Row>
    <Col xs="6">
      <Button block color="success">
        Meld
      </Button>
    </Col>
    <Col xs="6">
      <Button block color="warning">
        Quest
      </Button>
    </Col>
  </Row>
);

export default SnipeControls;
