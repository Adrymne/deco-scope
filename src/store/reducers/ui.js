import * as actions from 'store/actions';
import { SNIPE_MODE, RECORD_MODE } from 'types';

const DEFAULT = SNIPE_MODE;

export default (state = DEFAULT, action) => {
  switch (action.type) {
    case actions.TOGGLE_MODE:
      return state === SNIPE_MODE ? RECORD_MODE : SNIPE_MODE;
    default:
      return state;
  }
};
