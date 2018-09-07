export const DO_MELD = 'DO_MELD';
export const doMeld = () => ({ type: DO_MELD });

export const DO_QUEST = 'DO_QUEST';
export const doQuest = () => ({ type: DO_QUEST });

export const TOGGLE_MODE = 'TOGGLE_MODE';
export const toggleMode = () => ({ type: TOGGLE_MODE });

export const ADD_MELD = 'ADD_MELD';
export const addMeld = () => ({ type: ADD_MELD });

export const DELETE_LAST_MELD = 'DELETE_LAST_MELD';
export const deleteLastMeld = () => ({ type: DELETE_LAST_MELD });

export const SET_DECO = 'SET_DECO';
export const setDeco = (id, index, deco) => ({
  type: SET_DECO,
  data: { id, index, value: deco }
});

export const SET_COUNTER_STATE = 'SET_COUNTER_STATE';
export const setCounterState = state => ({
  type: SET_COUNTER_STATE,
  data: state
});
