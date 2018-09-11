import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';

import DecoPicker from './app/DecoPicker';
import MenuBar from './app/MenuBar';
import ModeTabs from './app/ModeTabs';
import QuestCounter from './app/QuestCounter';
import Melds from './app/Melds';
import Controls from './app/Controls';

import './App.css';

const App = () => (
  <React.Fragment>
    <DecoPicker />
    <Grid
      container
      direction="column"
      wrap="nowrap"
      style={{ height: '100%' }}
      spacing={8}
    >
      <Grid item>
        <AppBar position="static">
          <MenuBar />
          <ModeTabs />
        </AppBar>
      </Grid>
      <Grid item>
        <QuestCounter />
      </Grid>
      <Grid item style={{ flexGrow: 1 }}>
        <Melds />
      </Grid>
      <Grid item>
        <Controls />
      </Grid>
    </Grid>
  </React.Fragment>
);

export default App;
