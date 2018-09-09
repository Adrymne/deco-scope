import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from 'store/actions';

const SnipeControls = ({ doMeld, doQuest }) => (
  <Row>
    <Col xs="6">
      <Button block color="success" onClick={doMeld}>
        Meld
      </Button>
    </Col>
    <Col xs="6">
      <Button block color="warning" onClick={doQuest}>
        Quest
      </Button>
    </Col>
  </Row>
);

export default connect(
  undefined,
  actions
)(SnipeControls);
