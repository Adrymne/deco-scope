import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import * as selectors from 'store/selectors';
import * as actions from 'store/actions';
import DecoSearch from './decoPicker/DecoSearch';

const DecoPicker = ({ isOpen, closeDecoPicker }) => (
  <Modal isOpen={isOpen} toggle={closeDecoPicker}>
    <ModalHeader toggle={closeDecoPicker}>Select Decoration</ModalHeader>
    <ModalBody>
      <DecoSearch />
    </ModalBody>
  </Modal>
);

const mapStateToProps = state => ({
  isOpen: selectors.isDecoPickerOpen(state)
});

export default connect(
  mapStateToProps,
  actions
)(DecoPicker);
