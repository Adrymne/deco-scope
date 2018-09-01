import subject from './melds';
import * as actions from 'store/actions';

describe('DO_MELD', () => {
  it('empty meld list', () => {
    const state = { meldList: [] };
    const action = actions.doMeld();

    const result = subject(state, action);

    expect(result).toEqual({ meldList: [] });
  });

  it('melds in queue', () => {
    const state = { meldList: [1, 2, 3] };
    const action = actions.doMeld();

    const result = subject(state, action);

    expect(result).toEqual({ meldList: [2, 3] });
  });
});

describe('DO_QUEST', () => {
  describe('counterState', () => {
    it('state 1', () => {
      const state = { counterState: 1 };
      const action = actions.doQuest();

      const result = subject(state, action);

      expect(result.counterState).toBe(2);
    });

    it('state 2', () => {
      const state = { counterState: 2 };
      const action = actions.doQuest();

      const result = subject(state, action);

      expect(result.counterState).toBe(3);
    });

    it('state 3', () => {
      const state = { counterState: 3 };
      const action = actions.doQuest();

      const result = subject(state, action);

      expect(result.counterState).toBe(1);
    });
  });

  describe('meldList', () => {
    it('empty meld list', () => {
      const state = { meldList: [] };
      const action = actions.doQuest();

      const result = subject(state, action);

      expect(result.meldList).toEqual([]);
    });

    it('state 1', () => {
      const state = { meldList: [1, 2, 3], counterState: 1 };
      const action = actions.doQuest();

      const result = subject(state, action);

      expect(result.meldList).toEqual([2, 3]);
    });

    it('state 2', () => {
      const state = { meldList: [1, 2, 3], counterState: 2 };
      const action = actions.doQuest();

      const result = subject(state, action);

      expect(result.meldList).toEqual([2, 3]);
    });

    it('state 3', () => {
      const state = { meldList: [1, 2, 3], counterState: 3 };
      const action = actions.doQuest();

      const result = subject(state, action);

      expect(result.meldList).toEqual([3]);
    });
  });
});

it('ADD_MELD', () => {
  const state = { meldList: [1, 2, 3] };
  const action = actions.addMeld();

  const result = subject(state, action);

  expect(result.meldList).toEqual([1, 2, 3, []]);
});

describe('DELETE_MELD', () => {
  it('empty list', () => {
    const state = { meldList: [] };
    const action = actions.deleteMeld();

    const result = subject(state, action);

    expect(result.meldList).toEqual([]);
  });

  it('non-empty list', () => {
    const state = { counterState: 1, meldList: [1, 2, 3] };
    const action = actions.deleteMeld();

    const result = subject(state, action);

    expect(result).toEqual({
      counterState: 1,
      meldList: [1, 2]
    });
  });
});

it('SET_DECO', () => {
  const state = { meldList: [1, ['a', 'b', 'c'], 3] };
  const action = actions.setDeco(1, 2, 'id');

  const result = subject(state, action);

  expect(result).toEqual({ meldList: [1, ['a', 'b', 'id'], 3] });
});

it('SET_COUNTER_STATE', () => {
  const state = { counterState: 'old state' };
  const action = actions.setCounterState('new state');

  const result = subject(state, action);

  expect(result).toEqual({ counterState: 'new state' });
});
