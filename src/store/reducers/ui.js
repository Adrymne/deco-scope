import * as R from 'ramda';
import * as actions from 'store/actions';
import { SNIPE_MODE, RECORD_MODE } from 'types';

const DEFAULT = { mode: SNIPE_MODE };

export default (state = DEFAULT, action) => {
  switch (action.type) {
    case actions.TOGGLE_MODE:
      return R.evolve(
        { mode: state => (state === SNIPE_MODE ? RECORD_MODE : SNIPE_MODE) },
        state
      );
    case actions.OPEN_DECO_PICKER:
      return R.assoc('decoPicker', action.data, state);
    case actions.CLOSE_DECO_PICKER:
      return R.assoc('decoPicker', undefined, state);
    case actions.SET_DECO:
      return R.assoc('decoPicker', undefined, state);
    default:
      return state;
  }
};
