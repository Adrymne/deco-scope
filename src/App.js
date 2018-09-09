import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

import { SNIPE_MODE, RECORD_MODE } from 'types';
import * as selectors from 'store/selectors';

import Undo from './app/Undo';
import ModeTabs from './app/ModeTabs';
import Melds from './app/Melds';
import QuestCounter from './app/QuestCounter';
import SnipeControls from './app/SnipeControls';
import RecordControls from './app/RecordControls';
import DecoPicker from './app/DecoPicker';

const modeControls = uiMode => {
  switch (uiMode) {
    case SNIPE_MODE:
      return <SnipeControls />;
    case RECORD_MODE:
      return <RecordControls />;
    default:
      return null;
  }
};

const App = ({ uiMode, melds }) => (
  <div>
    <DecoPicker />
    <AppBar position="static">
      <Undo />
      <ModeTabs />
    </AppBar>
    <Typography component="div" style={{ padding: 5 }}>
      <QuestCounter />
      <Melds />
      {modeControls(uiMode)}
    </Typography>
  </div>
);

const mapStateToProps = state => ({
  uiMode: selectors.uiMode(state)
});

export default connect(mapStateToProps)(App);
