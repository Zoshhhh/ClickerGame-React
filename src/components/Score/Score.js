import React from 'react';
import './Score.css';

function Score({ score }) {
  return (
    <div className="score-display">
      Score: {score}
    </div>
  );
}

export default Score;
