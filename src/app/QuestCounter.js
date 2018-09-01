import React from 'react';

import './QuestCounter.css';

const DUMMY = [1, 2, 1];

const QuestCounter = ({ counterSteps = DUMMY }) => (
  <div className="snipe-controls__counter">
    {counterSteps.map((step, index) => (
      <div className="snipe-controls__step" key={index}>
        {step}
      </div>
    ))}
  </div>
);

export default QuestCounter;
