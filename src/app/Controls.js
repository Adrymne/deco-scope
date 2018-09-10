import React from 'react';
import { connect } from 'react-redux';

import { SNIPE_MODE, RECORD_MODE } from 'types';
import SnipeControls from './controls/SnipeControls';
import RecordControls from './controls/RecordControls';
import * as selectors from 'store/selectors';

const Controls = ({ uiMode }) => {
  switch (uiMode) {
    case SNIPE_MODE:
      return <SnipeControls />;
    case RECORD_MODE:
      return <RecordControls />;
    default:
      return null;
  }
};

export default connect(state => ({ uiMode: selectors.uiMode(state) }))(
  Controls
);
