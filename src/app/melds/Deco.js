import React from 'react';

import { SNIPE_MODE, RECORD_MODE } from 'types';
import ModeSwitch from 'components/ModeSwitch';
import SnipeDeco from './deco/SnipeDeco';
import RecordDeco from './deco/RecordDeco';

const modeRender = deco => ({
  [SNIPE_MODE]: () => <SnipeDeco {...deco} />,
  [RECORD_MODE]: () => <RecordDeco {...deco} />
});

const Deco = ({ deco }) => <ModeSwitch modeRender={modeRender(deco)} />;

export default Deco;
