export const SNIPE_MODE = 'SNIPE_MODE';
export const RECORD_MODE = 'RECORD_MODE';

// Quest Advance Counter
// Quests advance the meld list in a 1-1-2 pattern
const COUNTER_STATES = [1, 1, 2];
export const questCounter = {
  init: () => 0,
  next: counter => (counter === 2 ? 0 : counter + 1),
  getMeldAdvance: counter => (counter === 2 ? 2 : 1),
  ALL_STATES: [0, 1, 2],
  currentState: counter =>
    COUNTER_STATES.map(
      (questAdvance, value) =>
        counter === value
          ? { questAdvance, value, isActive: true }
          : { questAdvance, value }
    )
};
