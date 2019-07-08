import React from 'react';
import './style.scss';
import golfers from '../../../../../../../assets/golfers/golfers.jpg';

export default function IntroSlide({activePointSetter}) {
  return (
    <div className="slide slide--intro">
      <section className="slide__content">
        <h1>30 of the best golf courses in Ireland</h1>
        <p>
          irish golf stars Padraig Harrington (Ryder Cup captain 2020) and Leona Maguire (two-time Curtis Cup winner) take you on a guided tour
        </p>
        <button
          onClick={() => activePointSetter(0)}
        >
          Explore map
        </button>
      </section>
      <img src={golfers} alt ="golfers" />
    </div>
  );
}