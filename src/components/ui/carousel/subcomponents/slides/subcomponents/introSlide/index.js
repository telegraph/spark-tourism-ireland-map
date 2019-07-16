import React from 'react';
import './style.scss';
import padraigImg from '../../../../../../../assets/golfers/padraigImg.jpg';
import leonaImg from '../../../../../../../assets/golfers/leonaImg.jpg';

export default function IntroSlide({activePointSetter, toggleSlideOut}) {
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
      <div className="golfers-intro">
        <img src={leonaImg} alt ="golfers" onClick={() => toggleSlideOut('Leona')} />
        <img src={padraigImg} alt ="golfers" onClick={() => toggleSlideOut('Padraig')} />
      </div>
    </div>
  );
}