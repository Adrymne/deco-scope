import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import * as selectors from 'store/selectors';
import * as actions from 'store/actions';

const DecoPicker = ({ isOpen, closeDecoPicker }) => (
  <Modal isOpen={isOpen} toggle={closeDecoPicker}>
    <ModalHeader toggle={closeDecoPicker}>Select Decoration</ModalHeader>
    <ModalBody>
      <input type="text" />
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
