import React from 'react';

import { SNIPE_MODE, RECORD_MODE } from 'types';
import ModeSwitch from 'components/ModeSwitch';
import SnipeControls from './controls/SnipeControls';
import RecordControls from './controls/RecordControls';

const modeRender = {
  [SNIPE_MODE]: () => <SnipeControls />,
  [RECORD_MODE]: () => <RecordControls />
};

const Controls = () => <ModeSwitch modeRender={modeRender} />;

export default Controls;
