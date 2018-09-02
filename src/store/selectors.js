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
    questCounter :: CounterState
    meldList :: [Meld]
  }
}
*/

export const uiMode = state => state.ui;
