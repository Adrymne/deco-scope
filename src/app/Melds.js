import React from 'react';
import { connect } from 'react-redux';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import Deco from './melds/Deco';
import * as selectors from 'store/selectors';

const toKey = ({ meld, deco }) => `${meld.id} ${deco.index}`;

const Melds = ({ decos }) => (
  <GridList cellHeight="auto" cols={3} spacing={0}>
    {decos.map(deco => (
      <GridListTile key={toKey(deco)}>
        <Deco {...deco} />
      </GridListTile>
    ))}
  </GridList>
);

export default connect(state => ({
  decos: selectors.decos(state)
}))(Melds);
