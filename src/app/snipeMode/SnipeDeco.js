import React from 'react';
import * as R from 'ramda';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import DECORATIONS from 'decorations';
import * as selectors from 'store/selectors';

const styles = theme => ({
  r7: { color: 'purple', fontWeight: 'bold' },
  r8: { color: 'orange', fontWeight: 'bold' },
  atRisk: { backgroundColor: theme.palette.error.light }
});

const SnipeDeco = ({ name, rarity, isAtRisk, classes }) => (
  <Typography
    align="center"
    className={classNames({
      [classes.atRisk]: isAtRisk,
      [classes.r7]: rarity === 7,
      [classes.r8]: rarity === 8
    })}
  >
    {name}
  </Typography>
);

const mapStateToProps = state => ({
  questAdvance: selectors.currentQuestAdvance(state)
});
const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  name: ownProps.decoName,
  rarity: R.prop('rarity', DECORATIONS[ownProps.decoName]),
  isAtRisk: ownProps.meldIndex < stateProps.questAdvance
});
export default connect(
  mapStateToProps,
  undefined,
  mergeProps
)(withStyles(styles)(SnipeDeco));
