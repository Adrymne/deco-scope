import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import melds from './melds';
import ui from './ui';

export default combineReducers({ melds: undoable(melds), ui });
