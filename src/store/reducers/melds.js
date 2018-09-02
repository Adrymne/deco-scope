import * as R from 'ramda';
import * as actions from 'store/actions';

const DEFAULT = {
  // quests advance the meld list in a 1-1-2 pattern
  counterState: 1,
  meldList: []
};
const EMPTY_MELD = [undefined, undefined, undefined];

const updateDeco = ({ decoIndex, decoId }) => R.update(decoIndex, decoId);

export default (state = DEFAULT, action) => {
  switch (action.type) {
    case actions.DO_MELD:
      return R.evolve({ meldList: R.tail }, state);
    case actions.DO_QUEST:
      return R.evolve(
        {
          counterState: counterState =>
            counterState + 1 > 3 ? 1 : counterState + 1,
          meldList: meldList =>
            R.drop(state.counterState === 3 ? 2 : 1, meldList)
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
