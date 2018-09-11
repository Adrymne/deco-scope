import React from 'react';

import { SNIPE_MODE, RECORD_MODE } from 'types';
import ModeSwitch from 'components/ModeSwitch';
import SnipeDeco from './deco/SnipeDeco';
import RecordDeco from './deco/RecordDeco';

const modeRender = props => ({
  [SNIPE_MODE]: () => <SnipeDeco {...props} />,
  [RECORD_MODE]: () => <RecordDeco {...props} />
});

const Deco = props => <ModeSwitch modeRender={modeRender(props)} />;

export default Deco;
