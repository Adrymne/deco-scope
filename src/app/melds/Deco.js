import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { RECORD_MODE } from 'types';
import * as selectors from 'store/selectors';

const EditableDeco = ({ deco, onClick }) => (
  <Button
    onClick={onClick}
    block
    outline
    color="secondary"
    style={{ borderRadius: 0 }}
  >
    {deco}
    &nbsp;
  </Button>
);

const ViewDeco = ({ deco }) => (
  <div>
    {deco}
    &nbsp;
  </div>
);

const Deco = ({ deco, edit, isRecordMode }) =>
  isRecordMode ? (
    <EditableDeco deco={deco} onClick={edit} />
  ) : (
    <ViewDeco deco={deco} />
  );

const mapStateToProps = state => ({
  isRecordMode: selectors.uiMode(state) === RECORD_MODE
});

export default connect(mapStateToProps)(Deco);
