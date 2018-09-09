import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Undo from '@material-ui/icons/Undo';
import { connect } from 'react-redux';
import { ActionCreators as actions } from 'redux-undo';

const MenuBar = ({ undo, classes }) => (
  <Toolbar>
    <Typography style={{ flexGrow: 1 }} variant="title" color="inherit">
      Deco Scope
    </Typography>
    <IconButton style={{ outline: 0 }} color="inherit">
      <Undo onClick={undo} />
    </IconButton>
  </Toolbar>
);

export default connect(
  undefined,
  actions
)(MenuBar);
