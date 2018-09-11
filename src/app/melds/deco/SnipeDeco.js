import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import DecoName from 'components/DecoName';
import * as selectors from 'store/selectors';

const styles = theme => ({
  atRisk: { backgroundColor: theme.palette.error.light }
});

const SnipeDeco = ({ name, isAtRisk, classes }) => (
  <div className={classNames({ [classes.atRisk]: isAtRisk })}>
    <DecoName name={name} />
  </div>
);

const mapStateToProps = state => ({
  questAdvance: selectors.currentQuestAdvance(state)
});
const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  name: ownProps.deco.name,
  isAtRisk: ownProps.meld.index < stateProps.questAdvance
});
export default connect(
  mapStateToProps,
  undefined,
  mergeProps
)(withStyles(styles)(SnipeDeco));
