import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import * as selectors from 'store/selectors';
import * as actions from 'store/actions';
import './QuestCounter.css';

const COUNTER_STATES = [1, 1, 2];

const QuestCounter = ({ counterState, setCounterState }) => (
  <div className="snipe-controls__counter">
    {COUNTER_STATES.map((display, value) => (
      <Button
        className="snipe-controls__step"
        outline
        color="secondary"
        onClick={() => setCounterState(value)}
        key={value}
        active={counterState === value}
      >
        {display}
      </Button>
    ))}
  </div>
);

const mapStateToProps = state => ({
  counterState: selectors.counterState(state)
});

export default connect(
  mapStateToProps,
  actions
)(QuestCounter);
