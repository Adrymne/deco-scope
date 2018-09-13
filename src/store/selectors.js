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

// DecoInfo :: { name :: String, index :: Int }
// MeldInfo :: { id :: String, index :: Int }
const mapIndexed = R.addIndex(R.map);

// getMeld :: Dict Id [Deco] -> (String, Int) -> { meld :: MeldInfo, decoNames :: [String] }
const getMeld = meldDecos => (id, index) => ({
  meld: { id, index },
  decoNames: R.propOr([], id, meldDecos)
});
// extractDecos :: { meld :: MeldInfo, decoNames :: [String] } -> [{ deco :: DecoInfo, meld :: MeldInfo }]
const extractDecos = ({ meld, decoNames }) =>
  mapIndexed((name, index) => ({ meld, deco: { name, index } }), decoNames);
// decos :: State -> [{ deco :: DecoInfo, meld :: MeldInfo }]
export const decos = state =>
  R.transduce(
    mapIndexed(
      R.pipe(
        getMeld(state.melds.present.byId),
        extractDecos
      )
    ),
    R.concat,
    [],
    state.melds.present.list
  );
