import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { QuestCounter as Counter } from 'types';
import * as selectors from 'store/selectors';
import * as actions from 'store/actions';
import './QuestCounter.css';

const QuestCounter = ({ counterState, setCounterState }) => (
  <div className="snipe-controls__counter">
    {Counter.getCounterSteps(counterState).map(({ display, value }) => (
      <Button
        className="snipe-controls__step"
        outline
        color="secondary"
        onClick={() => setCounterState(value)}
        key={Counter.stringify(value)}
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
