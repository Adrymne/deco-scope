import * as R from 'ramda';
import subject from './melds';
import * as actions from 'store/actions';

describe('DO_MELD', () => {
  it('empty meld list', () => {
    const state = { byId: {}, list: [] };
    const action = actions.doMeld();

    const result = subject(state, action);

    expect(result).toEqual(state);
  });

  it('melds in queue', () => {
    const state = {
      byId: { 1: 'meld 1', 2: 'meld 2' },
      list: [1, 2]
    };
    const action = actions.doMeld();

    const result = subject(state, action);

    expect(result).toEqual({
      byId: { 2: 'meld 2' },
      list: [2]
    });
  });
});

describe('DO_QUEST', () => {
  const INITIAL_STATE = {
    byId: { 1: 'meld 1', 2: 'meld 2', 3: 'meld 3' },
    list: [1, 2, 3]
  };

  it('state 0', () => {
    const state = R.assoc('counterState', 0, INITIAL_STATE);
    const action = actions.doQuest();

    const result = subject(state, action);

    expect(result).toEqual({
      counterState: 1,
      byId: { 2: 'meld 2', 3: 'meld 3' },
      list: [2, 3]
    });
  });

  it('state 1', () => {
    const state = R.assoc('counterState', 1, INITIAL_STATE);
    const action = actions.doQuest();

    const result = subject(state, action);

    expect(result).toEqual({
      counterState: 2,
      byId: { 2: 'meld 2', 3: 'meld 3' },
      list: [2, 3]
    });
  });

  it('state 2', () => {
    const state = R.assoc('counterState', 2, INITIAL_STATE);
    const action = actions.doQuest();

    const result = subject(state, action);

    expect(result).toEqual({
      counterState: 0,
      byId: { 3: 'meld 3' },
      list: [3]
    });
  });
});

it('ADD_MELD', () => {
  const state = {
    byId: { 1: 'meld 1', 2: 'meld 2' },
    list: [1, 2]
  };
  const action = actions.addMeld();

  const result = subject(state, action);

  expect(result.list).toHaveLength(3);
  const newId = result.list[2];
  expect(typeof newId).toBe('string');
  expect(result.byId[newId]).toEqual([undefined, undefined, undefined]);
});

describe('DELETE_LAST_MELD', () => {
  it('empty list', () => {
    const state = { byId: {}, list: [] };
    const action = actions.deleteLastMeld();

    const result = subject(state, action);

    expect(result).toEqual({ byId: {}, list: [] });
  });

  it('non-empty list', () => {
    const state = {
      byId: { 1: 'meld 1', 2: 'meld 3' },
      list: [1, 2]
    };
    const action = actions.deleteLastMeld();

    const result = subject(state, action);

    expect(result).toEqual({
      byId: { 1: 'meld 1' },
      list: [1]
    });
  });
});

it('SET_DECO', () => {
  const state = { byId: { meldId: [undefined, undefined, undefined] } };
  const action = actions.setDeco('meldId', 1, 'deco name');

  const result = subject(state, action);

  expect(result).toEqual({
    byId: { meldId: [undefined, 'deco name', undefined] }
  });
});

it('SET_COUNTER_STATE', () => {
  const state = { counterState: 'old state' };
  const action = actions.setCounterState('new state');

  const result = subject(state, action);

  expect(result).toEqual({ counterState: 'new state' });
});
