import * as R from 'ramda';
import { questCounter } from 'types';

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

export const currentQuestAdvance = state =>
  questCounter.getMeldAdvance(state.melds.present.counterState);
export const activeCounterState = state => state.melds.present.counterState;

export const melds = state =>
  R.map(
    id => ({ id, decos: state.melds.present.byId[id] }),
    state.melds.present.list
  );
