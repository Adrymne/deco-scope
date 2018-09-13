import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { connect } from 'react-redux';
import { SNIPE_MODE, RECORD_MODE } from 'types';
import * as selectors from 'store/selectors';
import * as actions from 'store/actions';

const pickTab = setUiMode => (e, mode) => setUiMode(mode);

const tabStyle = { outline: 0 };

const ModeTabs = ({ mode, setUiMode }) => (
  <Tabs fullWidth value={mode} onChange={pickTab(setUiMode)}>
    <Tab style={tabStyle} value={SNIPE_MODE} label="Snipe" />
    <Tab style={tabStyle} value={RECORD_MODE} label="Record" />
  </Tabs>
);

const mapStateToProps = state => ({ mode: selectors.uiMode(state) });

export default connect(
  mapStateToProps,
  actions
)(ModeTabs);
