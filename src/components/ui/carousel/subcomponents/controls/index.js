import React from 'react';
import './style.scss';

export default function Controls({slides, activePoint, toggleActive}) {
  return (
    <div className="carousel__controls">
      <button onClick={(e) => toggleActive("back", e)}>
        <p>Back</p>
      </button>
      <div className="controls__progress">
        <p>
          {`${activePoint + 1} out of ${slides}`}
        </p>
      </div>
      <button onClick={(e) => toggleActive("next", e)}>
        <p>Next</p>
      </button>
    </div>
  );
}