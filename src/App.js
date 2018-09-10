import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';

import MenuBar from './app/MenuBar';
import ModeTabs from './app/ModeTabs';
import SnipeMode from './app/SnipeMode';
import DecoPicker from './app/DecoPicker';

import './App.css';

const App = ({ uiMode, melds }) => (
  <React.Fragment>
    <DecoPicker />
    <Grid container direction="column" style={{ height: '100%' }}>
      <AppBar position="static">
        <MenuBar />
        <ModeTabs />
      </AppBar>
      <SnipeMode />
    </Grid>
  </React.Fragment>
);

export default App;
