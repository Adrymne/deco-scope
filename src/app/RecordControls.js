import React from 'react';
import { Row, Col, Button } from 'reactstrap';

const RecordControls = () => (
  <Row>
    <Col xs="6">
      <Button block color="success">
        Add
      </Button>
    </Col>
    <Col xs="6">
      <Button block color="danger">
        Delete
      </Button>
    </Col>
  </Row>
);

export default RecordControls;
