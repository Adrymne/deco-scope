import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import DecoName from 'components/DecoName';
import * as actions from 'store/actions';

const styles = {
  container: { padding: '2px' },
  button: { borderRadius: 0 }
};

const RecordDeco = ({ name, onClick, classes }) => (
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
);

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  name: ownProps.deco.name,
  onClick: () =>
    dispatchProps.openDecoPicker(ownProps.meld.id, ownProps.deco.index)
});
export default connect(
  undefined,
  actions,
  mergeProps
)(withStyles(styles)(RecordDeco));
