import * as R from 'ramda';
import * as actions from 'store/actions';
import { SNIPE_MODE } from 'types';

const DEFAULT = { mode: SNIPE_MODE };

export default (state = DEFAULT, action) => {
  switch (action.type) {
    case actions.SET_UI_MODE:
      return R.assoc('mode', action.data, state);
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
