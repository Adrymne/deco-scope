import Type from 'union-type';

export const SNIPE_MODE = 'SNIPE_MODE';
export const RECORD_MODE = 'RECORD_MODE';

const QC = Type({ One: [], Two: [], Three: [] });
export const QuestCounter = {
  type: QC,
  init: () => QC.One,
  advance: QC.case({
    One: () => QC.Two,
    Two: () => QC.Three,
    Three: () => QC.One
  }),
  getMeldAdvance: QC.case({
    One: () => 1,
    Two: () => 1,
    Three: () => 2
  }),
  getCounterSteps: QC.case({
    One: () => [
      { display: 1, value: QC.One },
      { display: 1, value: QC.Two },
      { display: 2, value: QC.Three }
    ],
    Two: () => [
      { display: 1, value: QC.Two },
      { display: 2, value: QC.Three },
      { display: 1, value: QC.One }
    ],
    Three: () => [
      { display: 2, value: QC.Three },
      { display: 1, value: QC.One },
      { display: 1, value: QC.Two }
    ]
  }),
  stringify: QC.case({
    One: () => 'ONE',
    Two: () => 'TWO',
    Three: () => 'THREE'
  })
};
