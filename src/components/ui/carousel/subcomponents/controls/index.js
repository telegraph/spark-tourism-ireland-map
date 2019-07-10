import React from 'react';
import './style.scss';
import arrow from '../../../../../assets/ui/arrow.svg';

export default function Controls({slides, activePoint, toggleActive, isNavVisible}) {
  return (
    <div className={`carousel__controls ${!isNavVisible ? 'carousel__controls--hidden' : ''}`}>
      <button onClick={(e) => toggleActive("back", e)} style={{opacity: `${activePoint < 0 ? '0.8' : '1'}`}} >
        <img className="back" src={arrow} alt="back" />
        <p>Back</p>
      </button>
      <div className="controls__progress">
        <p>
          {`${activePoint + 1} out of ${slides}`}
        </p>
      </div>
      <button 
        onClick={(e) => toggleActive("next", e)}
        style={{
        opacity: `${activePoint + 1 === slides ? '0.4' : '1'}`,
        }}
        disabled={activePoint + 1 === slides && "true"}
      >
        <p>Next</p>
        <img className="next" src={arrow} alt="next" />
      </button>
    </div>
  );
}