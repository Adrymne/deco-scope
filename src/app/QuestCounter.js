import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import * as selectors from 'store/selectors';
import * as actions from 'store/actions';
import { questCounter } from 'types';
import './QuestCounter.css';

const QuestCounter = ({ activeState, setCounterState }) => (
  <div className="snipe-controls__counter">
    {questCounter.ALL_STATES.map(counterState => (
      <Button
        className="snipe-controls__step"
        outline
        color="secondary"
        onClick={() => setCounterState(counterState)}
        key={counterState}
        active={counterState === activeState}
      >
        {questCounter.getMeldAdvance(counterState)}
      </Button>
    ))}
  </div>
);

const mapStateToProps = state => ({
  activeState: selectors.activeCounterState(state)
});

export default connect(
  mapStateToProps,
  actions
)(QuestCounter);
