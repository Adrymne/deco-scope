import React from 'react';
import { Container } from 'reactstrap';

import './App.css';

import ModeToggle from './app/ModeToggle';
import Melds from './app/Melds';
import SnipeControls from './app/SnipeControls';

const DUMMY_MELDS = [
  ['Antipara', 'Fortitude', 'Antipara'],
  ['Attack Boost', 'Tenderizer', 'Artillery'],
  ['Antipara', 'Fortitude', 'Antipara'],
  ['Attack Boost', 'Tenderizer', 'Artillery'],
  ['Antipara', 'Fortitude', 'Antipara'],
  ['Attack Boost', 'Tenderizer', 'Artillery'],
  ['Antipara', 'Fortitude', 'Antipara'],
  ['Attack Boost', 'Tenderizer', 'Artillery'],
  ['Antipara', 'Fortitude', 'Antipara'],
  ['Attack Boost', 'Tenderizer', 'Artillery'],
  ['Antipara', 'Fortitude', 'Antipara'],
  ['Attack Boost', 'Tenderizer', 'Artillery']
];

class App extends React.Component {
  render() {
    return (
      <Container fluid className="app">
        <div className="mode-toggle">
          <ModeToggle />
        </div>
        <div className="melds">
          <Melds melds={DUMMY_MELDS} />
        </div>
        <div className="snipe-controls">
          <SnipeControls />
        </div>
      </Container>
    );
  }
}

export default App;
