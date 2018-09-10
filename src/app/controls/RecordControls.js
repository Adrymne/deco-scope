import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from 'store/actions';

const RecordControls = ({ addMeld, deleteLastMeld }) => (
  <Row>
    <Col xs="6">
      <Button block color="success" onClick={addMeld}>
        Add
      </Button>
    </Col>
    <Col xs="6">
      <Button block color="danger" onClick={deleteLastMeld}>
        Delete
      </Button>
    </Col>
  </Row>
);

export default connect(
  undefined,
  actions
)(RecordControls);
