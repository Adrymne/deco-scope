import * as R from 'ramda';

/*
type Mode = Snipe | Record
type CounterState = 0 | 1 | 2

type Id = String
type Deco = Maybe String
type Meld = Deco Deco Deco

type State = {
  ui :: Mode,
  melds :: {
    counterState :: CounterState
    byId :: Dict Id Meld
    list :: [Id]
  }
}
*/

export const uiMode = state => state.ui;

export const melds = state =>
  R.map(id => ({ id, decos: state.melds.byId[id] }), state.melds.list);

export const counterState = state => state.melds.counterState;
