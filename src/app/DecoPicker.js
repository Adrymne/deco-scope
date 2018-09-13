import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { connect } from 'react-redux';

import DecoSearch from './decoPicker/DecoSearch';
import * as selectors from 'store/selectors';
import * as actions from 'store/actions';

const DecoPicker = ({ isOpen, closeDecoPicker }) => (
  <Dialog open={isOpen} onClose={closeDecoPicker}>
    <DialogContent>
      <DecoSearch />
    </DialogContent>
  </Dialog>
);

const mapStateToProps = state => ({
  isOpen: selectors.isDecoPickerOpen(state)
});

export default connect(
  mapStateToProps,
  actions
)(DecoPicker);
