import React from 'react';
import Slides from './subcomponents/slides';
import Controls from './subcomponents/controls';
import './style.scss';

export default function Carousel( { data, activePoint, toggleActive } ) {
  return(
    <aside className="carousel">
      <Slides slides={data} activePoint={activePoint} />
      <Controls slides={data.length} activePoint={activePoint} toggleActive={toggleActive} />
    </aside>
  )
}