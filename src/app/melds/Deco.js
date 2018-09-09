import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { RECORD_MODE } from 'types';
import * as selectors from 'store/selectors';
import DECORATIONS from 'decorations';

const EditableDeco = ({ decoName, onClick }) => (
  <Button
    onClick={onClick}
    block
    outline
    color="secondary"
    style={{ borderRadius: 0 }}
  >
    {decoName}
    &nbsp;
  </Button>
);

const rarityStyle = name => {
  const deco = DECORATIONS[name];
  switch (deco && deco.rarity) {
    case 7:
      return { color: 'purple', fontWeight: 'bold' };
    case 8:
      return { color: 'orange', fontWeight: 'bold' };
    default:
      return { color: 'black', fontWeight: 'normal' };
  }
};

const ViewDeco = ({ decoName }) => (
  <div style={rarityStyle(decoName)}>
    {decoName}
    &nbsp;
  </div>
);

const Deco = ({ decoName, edit, isRecordMode }) =>
  isRecordMode ? (
    <EditableDeco decoName={decoName} onClick={edit} />
  ) : (
    <ViewDeco decoName={decoName} />
  );

const mapStateToProps = state => ({
  isRecordMode: selectors.uiMode(state) === RECORD_MODE
});

export default connect(mapStateToProps)(Deco);
