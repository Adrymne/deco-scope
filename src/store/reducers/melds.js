import * as R from 'ramda';
import uuidv4 from 'uuid/v4';
import * as actions from 'store/actions';
import { questCounter } from 'types';

const DEFAULT = {
  // quests advance the meld list in a 1-1-2 pattern
  counterState: questCounter.init(),
  byId: {},
  list: []
};
const EMPTY_MELD = [undefined, undefined, undefined];

export default (state = DEFAULT, action) => {
  switch (action.type) {
    case actions.DO_MELD:
      return R.evolve(
        {
          byId: R.dissoc(R.head(state.list)),
          list: R.tail
        },
        state
      );
    case actions.DO_QUEST:
      const advanceCount = questCounter.getMeldAdvance(state.counterState);
      return R.evolve(
        {
          counterState: questCounter.next,
          byId: R.omit(R.take(advanceCount, state.list)),
          list: R.drop(advanceCount)
        },
        state
      );
    case actions.ADD_MELD:
      const id = uuidv4();
      return R.evolve(
        {
          byId: R.assoc(id, EMPTY_MELD),
          list: R.append(id)
        },
        state
      );
    case actions.DELETE_LAST_MELD:
      return R.evolve(
        {
          byId: R.dissoc(R.last(state.list)),
          list: R.init
        },
        state
      );
    case actions.SET_DECO:
      return R.set(
        R.lensPath(['byId', action.data.id, action.data.index]),
        action.data.value,
        state
      );
    case actions.SET_COUNTER_STATE:
      return R.evolve({ counterState: () => action.data }, state);
    default:
      return state;
  }
};
