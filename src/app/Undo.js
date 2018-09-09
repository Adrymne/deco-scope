import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { ActionCreators } from 'redux-undo';

const Undo = ({ undo }) => (
  <Button
    color="info"
    outline
    onClick={undo}
    title="Undo"
    style={{ margin: '0 5px' }}
  >
    {'\u293A'}
  </Button>
);

export default connect(
  undefined,
  ActionCreators
)(Undo);
