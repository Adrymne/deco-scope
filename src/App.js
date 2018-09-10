import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import MenuBar from './app/MenuBar';
import ModeTabs from './app/ModeTabs';
import SnipeMode from './app/SnipeMode';
import DecoPicker from './app/DecoPicker';

import './App.css';

const App = ({ uiMode, melds }) => (
  <React.Fragment>
    <DecoPicker />
    <AppBar position="static">
      <MenuBar />
      <ModeTabs />
    </AppBar>
    <SnipeMode />
  </React.Fragment>
);

export default App;
