import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';

import MenuBar from './app/MenuBar';
import ModeTabs from './app/ModeTabs';
import SnipeMode from './app/SnipeMode';
import RecordMode from './app/RecordMode';
import DecoPicker from './app/DecoPicker';

// TODO: refactor out
import { connect } from 'react-redux';
import { SNIPE_MODE } from 'types';
import * as selectors from 'store/selectors';

import './App.css';

const App = ({ uiMode }) => (
  <React.Fragment>
    <DecoPicker />
    <Grid container direction="column" wrap="nowrap" style={{ height: '100%' }}>
      <AppBar position="static">
        <MenuBar />
        <ModeTabs />
      </AppBar>
      {uiMode === SNIPE_MODE ? <SnipeMode /> : <RecordMode />}
    </Grid>
  </React.Fragment>
);

export default connect(state => ({ uiMode: selectors.uiMode(state) }))(App);
