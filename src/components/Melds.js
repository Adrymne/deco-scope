import React from 'react';
import * as R from 'ramda';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

// decorateDecos :: Meld -> [Deco]
const decorateDecos = (meld, meldIndex) =>
  meld.decos.map((decoName, decoIndex) => ({
    decoName,
    decoIndex,
    meldId: meld.id,
    meldIndex
  }));
// extractDecos :: [Meld] -> [Deco]
const extractDecos = R.transduce(
  R.addIndex(R.map)(decorateDecos),
  R.concat,
  []
);

const Melds = ({ melds, renderDeco }) => (
  <GridList cellHeight="auto" cols={3} spacing={0}>
    {extractDecos(melds).map(deco => (
      <GridListTile key={`${deco.meldId} ${deco.decoIndex}`}>
        {renderDeco(deco)}
      </GridListTile>
    ))}
  </GridList>
);

export default Melds;
