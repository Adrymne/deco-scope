/*
type Mode = Snipe | Record

type CounterState = 1 | 2 | 3

type Deco = {
  decoId :: String
  isTarget :: Bool
}

type Id = String
type Meld = Deco Deco Deco

type State = {
  ui :: Mode,
  melds :: {
    counterState :: CounterState
    meldList :: [Meld]
  }
}
*/

export const uiMode = state => state.ui;

export const melds = state => state.melds.meldList;

export const counterState = state => state.melds.counterState;
