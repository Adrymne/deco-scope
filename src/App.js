import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import MenuBar from './app/MenuBar';
import ModeTabs from './app/ModeTabs';
import Melds from './app/Melds';
import QuestCounter from './app/QuestCounter';
import Controls from './app/Controls';
import DecoPicker from './app/DecoPicker';

const App = ({ uiMode, melds }) => (
  <div>
    <DecoPicker />
    <AppBar position="static">
      <MenuBar />
      <ModeTabs />
    </AppBar>
    <Typography component="div" style={{ padding: 5 }}>
      <QuestCounter />
      <Melds />
      <Controls />
    </Typography>
  </div>
);

export default App;
