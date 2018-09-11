import React from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import Deco from './melds/Deco';
import * as selectors from 'store/selectors';

const mapIndexed = R.addIndex(R.map);

// extractDecos :: (Meld, Int) -> [Deco]
const extractDecos = (meld, meldIndex) =>
  mapIndexed(
    (decoName, decoIndex) => ({
      decoName,
      decoIndex,
      meldId: meld.id,
      meldIndex
    }),
    meld.decos
  );

const renderDeco = deco => (
  <GridListTile key={`${deco.meldId} ${deco.decoIndex}`}>
    <Deco deco={deco} />
  </GridListTile>
);

const Melds = ({ melds }) => (
  <GridList cellHeight="auto" cols={3} spacing={0}>
    {R.transduce(
      mapIndexed(
        R.pipe(
          extractDecos,
          R.map(renderDeco)
        )
      ),
      R.concat,
      [],
      melds
    )}
  </GridList>
);

export default connect(state => ({ melds: selectors.melds(state) }))(Melds);
