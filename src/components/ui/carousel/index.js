import React from 'react';
import Slides from './subcomponents/slides';
import Controls from './subcomponents/controls';
import './style.scss';

export default function Carousel( { data, activePoint, toggleActive, activePointSetter, isNavVisible } ) {
  return(
    <aside className="carousel">
      <Slides slides={data} activePoint={activePoint} activePointSetter={activePointSetter} />
      <Controls slides={data.length} activePoint={activePoint} toggleActive={toggleActive} isNavVisible={isNavVisible} />
    </aside>
  )
}