import React from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';

import { SNIPE_MODE, RECORD_MODE } from 'types';
import * as selectors from 'store/selectors';

import './App.css';

import ModeToggle from './app/ModeToggle';
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
  <Container fluid className="app">
    <DecoPicker />
    <div className="mode-toggle">
      <ModeToggle />
    </div>
    <div className="quest-counter">
      <QuestCounter />
    </div>
    <div className="melds">
      <Melds />
    </div>
    <div className="controls">{modeControls(uiMode)}</div>
  </Container>
);

const mapStateToProps = state => ({
  uiMode: selectors.uiMode(state)
});

export default connect(mapStateToProps)(App);
