import React from 'react';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { connect } from 'react-redux';

import { questCounter, RECORD_MODE } from 'types';
import * as selectors from 'store/selectors';
import * as actions from 'store/actions';

const QuestCounter = ({ activeState, setCounterState, isEditable }) => (
  <ToggleButtonGroup
    value={activeState}
    exclusive
    onChange={(e, state) => setCounterState(state)}
  >
    {questCounter.ALL_STATES.map(counterState => (
      <ToggleButton
        key={counterState}
        value={counterState}
        style={{ width: '33%' }}
        disabled={!isEditable}
      >
        {questCounter.getMeldAdvance(counterState)}
      </ToggleButton>
    ))}
  </ToggleButtonGroup>
);

const mapStateToProps = state => ({
  activeState: selectors.activeCounterState(state),
  isEditable: selectors.uiMode(state) === RECORD_MODE
});
export default connect(
  mapStateToProps,
  actions
)(QuestCounter);
