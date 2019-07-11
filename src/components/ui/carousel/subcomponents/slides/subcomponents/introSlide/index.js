import React from 'react';
import './style.scss';
import golfers from '../../../../../../../assets/golfers/golfers.jpg';

export default function IntroSlide({activePointSetter}) {
  return (
    <div className="slide slide--intro">
      <section className="slide__content">
        <h1>The best courses on the island of Ireland</h1>
        <p>
          Irish golf stars Padraig Harrington and Leona Maguire select some of their favourite homeland courses
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