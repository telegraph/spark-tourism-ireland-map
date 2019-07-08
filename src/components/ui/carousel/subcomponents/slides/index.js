import React from 'react';
import Slide from './subcomponents/slide';
import './style.scss';

export default function Slides({ slides, activePoint }) {
  return (
    <div className="carousel__slider">
      {slides.map((slide, i) => (
        <Slide {...slide} index={i} activePoint={activePoint} />
      ))}
    </div>
  );
}