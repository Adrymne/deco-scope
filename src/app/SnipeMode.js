import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import Melds from 'components/Melds';
import SnipeControls from './snipeMode/SnipeControls';
import SnipeDeco from './snipeMode/SnipeDeco';
import * as selectors from 'store/selectors';

const SnipeMode = ({ melds }) => (
  <Grid item container direction="column" style={{ padding: 5, flexGrow: 1 }}>
    <Grid item style={{ flexGrow: 1 }}>
      <Melds melds={melds} renderDeco={props => <SnipeDeco {...props} />} />
    </Grid>
    <Grid item>
      <SnipeControls />
    </Grid>
  </Grid>
);

export default connect(state => ({ melds: selectors.melds(state) }))(SnipeMode);
