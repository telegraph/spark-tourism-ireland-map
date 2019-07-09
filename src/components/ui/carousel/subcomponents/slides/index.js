import React from 'react';
import Slide from './subcomponents/slide';
import IntroSlide from './subcomponents/introSlide';
import './style.scss';

export default function Slides({ slides, activePoint, activePointSetter, toggleGallery }) {
  return (
    <div className="carousel__slider">
      <IntroSlide activePointSetter={activePointSetter}/>
      {slides.map((slide, i) => (
        <Slide {...slide} index={i} activePoint={activePoint} toggleGallery={toggleGallery} />
      ))}
    </div>
  );
}