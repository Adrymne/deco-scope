import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import * as actions from 'store/actions';

const RecordControls = ({ addMeld }) => (
  <Button variant="contained" color="primary" onClick={addMeld} fullWidth>
    New
  </Button>
);

export default connect(
  undefined,
  actions
)(RecordControls);
