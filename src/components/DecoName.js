import React from 'react';
import * as R from 'ramda';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import DECORATIONS from 'decorations';

const styles = {
  r7: { color: 'purple', fontWeight: 'bold' },
  r8: { color: 'orange', fontWeight: 'bold' }
};

const decoRarity = name => R.prop('rarity', DECORATIONS[name]);

const DecoName = ({ name, classes }) => (
  <Typography
    align="center"
    className={classNames({
      [classes.r7]: decoRarity(name) === 7,
      [classes.r8]: decoRarity(name) === 8
    })}
  >
    {name || '?'}
  </Typography>
);

export default withStyles(styles)(DecoName);
