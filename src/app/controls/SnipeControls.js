import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import * as actions from 'store/actions';

const SnipeControls = ({ doMeld, doQuest }) => (
  <Grid container justify="space-around">
    <Button variant="contained" color="primary" size="large" onClick={doMeld}>
      Meld
    </Button>
    <Button
      variant="contained"
      color="secondary"
      size="large"
      onClick={doQuest}
    >
      Quest
    </Button>
  </Grid>
);

export default connect(
  undefined,
  actions
)(SnipeControls);
