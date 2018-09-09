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
export const decoPickerTarget = state => state.ui.decoPicker;

// TODO: centralize counterState logic somewhere (types.js?)
export const questAdvanceCount = state =>
  state.melds.present.counterState === 2 ? 2 : 1;

export const melds = state =>
  R.map(
    id => ({ id, decos: state.melds.present.byId[id] }),
    state.melds.present.list
  );

export const counterState = state => state.melds.present.counterState;
