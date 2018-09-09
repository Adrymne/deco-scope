import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { SNIPE_MODE, RECORD_MODE } from 'types';
import * as selectors from 'store/selectors';
import * as actions from 'store/actions';

const MODE_STRINGS = {
  [SNIPE_MODE]: 'Snipe Mode',
  [RECORD_MODE]: 'Record Mode'
};

const ModeToggle = ({ mode, toggleMode }) => (
  <Button block color="primary" onClick={toggleMode}>
    {MODE_STRINGS[mode] || 'Toggle mode'}
  </Button>
);

const mapStateToProps = state => ({ mode: selectors.uiMode(state) });

export default connect(
  mapStateToProps,
  actions
)(ModeToggle);
