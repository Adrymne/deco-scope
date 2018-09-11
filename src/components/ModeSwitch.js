import { connect } from 'react-redux';

import * as selectors from 'store/selectors';

const ModeSwitch = ({ uiMode, modeRender }) =>
  modeRender[uiMode] ? modeRender[uiMode]() : null;

export default connect(state => ({ uiMode: selectors.uiMode(state) }))(
  ModeSwitch
);
