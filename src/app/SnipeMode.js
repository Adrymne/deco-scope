import React from 'react';
import { connect } from 'react-redux';

import Melds from 'components/Melds';
import SnipeControls from './snipeMode/SnipeControls';
import SnipeDeco from './snipeMode/SnipeDeco';
import * as selectors from 'store/selectors';

const SnipeMode = ({ melds }) => (
  <div style={{ padding: 5 }}>
    <Melds melds={melds} renderDeco={props => <SnipeDeco {...props} />} />
    <SnipeControls />
  </div>
);

export default connect(state => ({ melds: selectors.melds(state) }))(SnipeMode);
