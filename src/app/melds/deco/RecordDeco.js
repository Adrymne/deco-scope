import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';

import DecoName from 'components/DecoName';
import * as selectors from 'store/selectors';
import * as actions from 'store/actions';

const styles = {
  container: { padding: '2px' },
  button: { borderRadius: 0, padding: 4 }
};

const RecordDeco = ({ name, onClick, classes, shouldScroll }) => (
  <ScrollIntoViewIfNeeded active={shouldScroll}>
    <div className={classes.container}>
      <Button
        variant="outlined"
        onClick={onClick}
        fullWidth
        className={classes.button}
      >
        <DecoName name={name} />
      </Button>
    </div>
  </ScrollIntoViewIfNeeded>
);

const mapStateToProps = state => ({ meldCount: selectors.meldCount(state) });
const mergeProps = ({ meldCount }, dispatchProps, { deco, meld }) => ({
  name: deco.name,
  shouldScroll: deco.index === 0 && meld.index === meldCount - 1,
  onClick: () => dispatchProps.openDecoPicker(meld.id, deco.index)
});
export default connect(
  mapStateToProps,
  actions,
  mergeProps
)(withStyles(styles)(RecordDeco));
