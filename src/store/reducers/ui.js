import * as actions from 'store/actions';

const SNIPE_MODE = 'SNIPE';
const RECORD_MODE = 'RECORD';
const DEFAULT = SNIPE_MODE;

export default (state = DEFAULT, action) => {
  switch (action.type) {
    case actions.TOGGLE_MODE:
      return state === SNIPE_MODE ? RECORD_MODE : SNIPE_MODE;
    default:
      return state;
  }
};
