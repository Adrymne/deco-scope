import * as R from 'ramda';

/*
type Id = String
type Index = Integer

type Mode = Snipe | Record
type DecoPicker = Closed | Open Id Index
type CounterState = 0 | 1 | 2

type Deco = Maybe String
type Meld = Deco Deco Deco

type State = {
  ui :: {
    mode :: Mode,
    decoPicker :: DecoPicker
  },
  melds :: {
    counterState :: CounterState
    byId :: Dict Id Meld
    list :: [Id]
  }
}
*/

export const uiMode = state => state.ui.mode;
export const isDecoPickerOpen = state => !!state.ui.decoPicker;

export const melds = state =>
  R.map(id => ({ id, decos: state.melds.byId[id] }), state.melds.list);

export const counterState = state => state.melds.counterState;
