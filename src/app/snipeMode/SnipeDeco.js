import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import Deco from 'components/Deco';
import * as selectors from 'store/selectors';

const styles = theme => ({
  atRisk: { backgroundColor: theme.palette.error.light }
});

const SnipeDeco = ({ name, isAtRisk, classes }) => (
  <div className={classNames({ [classes.atRisk]: isAtRisk })}>
    <Deco name={name} />
  </div>
);

const mapStateToProps = state => ({
  questAdvance: selectors.currentQuestAdvance(state)
});
const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  name: ownProps.decoName,
  isAtRisk: ownProps.meldIndex < stateProps.questAdvance
});
export default connect(
  mapStateToProps,
  undefined,
  mergeProps
)(withStyles(styles)(SnipeDeco));
