import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';

import DecoName from 'components/DecoName';
import * as selectors from 'store/selectors';

const styles = theme => ({
  atRisk: { backgroundColor: theme.palette.error.light }
});

const SnipeDeco = ({ name, isAtRisk, classes, shouldScroll }) => (
  <ScrollIntoViewIfNeeded
    active={shouldScroll}
    options={{ behavior: 'instant' }}
  >
    <div className={classNames({ [classes.atRisk]: isAtRisk })}>
      <DecoName name={name} />
    </div>
  </ScrollIntoViewIfNeeded>
);

const mapStateToProps = state => ({
  questAdvance: selectors.currentQuestAdvance(state)
});
const mergeProps = ({ questAdvance }, dispatchProps, { deco, meld }) => ({
  name: deco.name,
  shouldScroll: meld.index === 0 && deco.index === 0,
  isAtRisk: meld.index < questAdvance
});
export default connect(
  mapStateToProps,
  undefined,
  mergeProps
)(withStyles(styles)(SnipeDeco));
