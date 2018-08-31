import React from 'react';
import { Row, Col, Button } from 'reactstrap';

import QuestCounter from './snipeControls/QuestCounter';

const SnipeControls = () => (
  <React.Fragment>
    <QuestCounter />
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
  </React.Fragment>
);

export default SnipeControls;
