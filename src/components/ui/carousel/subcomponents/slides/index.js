import React from 'react';
import Slide from './subcomponents/slide';
import IntroSlide from './subcomponents/introSlide';
import './style.scss';

export default function Slides({ slides, activePoint, activePointSetter, toggleGallery, toggleSlideOut }) {
  return (
    <div className="carousel__slider">
      <IntroSlide activePointSetter={activePointSetter} toggleSlideOut={toggleSlideOut}/>
      {slides.map((slide, i) => (
        <Slide {...slide} index={i} activePoint={activePoint} toggleGallery={toggleGallery} toggleSlideOut={toggleSlideOut} />
      ))}
    </div>
  );
}