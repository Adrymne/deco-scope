import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import Melds from 'components/Melds';
import RecordDeco from './recordMode/RecordDeco.js';
import RecordControls from './recordMode/RecordControls';
import * as selectors from 'store/selectors';

const RecordMode = ({ melds }) => (
  <Grid
    item
    container
    direction="column"
    wrap="nowrap"
    style={{ padding: 5, flexGrow: 1 }}
  >
    <Grid item style={{ flexGrow: 1 }}>
      <Melds melds={melds} renderDeco={props => <RecordDeco {...props} />} />
    </Grid>
    <Grid item>
      <RecordControls />
    </Grid>
  </Grid>
);

export default connect(state => ({ melds: selectors.melds(state) }))(
  RecordMode
);
