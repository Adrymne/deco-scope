import * as R from 'ramda';
import * as actions from 'store/actions';

const DEFAULT = {
  // quests advance the meld list in a 1-1-2 pattern
  counterState: 0,
  meldList: []
};
const EMPTY_MELD = [undefined, undefined, undefined];

const advanceCounter = state => (state === 2 ? 0 : state + 1);
const getMeldAdvance = ({ counterState }) => (counterState === 2 ? 2 : 1);

const updateDeco = ({ decoIndex, decoId }) => R.update(decoIndex, decoId);

export default (state = DEFAULT, action) => {
  switch (action.type) {
    case actions.DO_MELD:
      return R.evolve({ meldList: R.tail }, state);
    case actions.DO_QUEST:
      return R.evolve(
        {
          counterState: advanceCounter,
          meldList: meldList => R.drop(getMeldAdvance(state), meldList)
        },
        state
      );
    case actions.ADD_MELD:
      return R.evolve({ meldList: R.append(EMPTY_MELD) }, state);
    case actions.DELETE_MELD:
      return R.evolve({ meldList: R.init }, state);
    case actions.SET_DECO:
      return R.evolve(
        { meldList: R.adjust(updateDeco(action.data), action.data.meldIndex) },
        state
      );
    case actions.SET_COUNTER_STATE:
      return R.evolve({ counterState: () => action.data }, state);
    default:
      return state;
  }
};
