import React, { useState } from 'react';
import './style.scss';
import cross from '../../../../../assets/ui/cross.svg';
import data from '../../../../../golfer.json';

export default function SlideOut({golfer, toggleSlideOut, open}) {

  const [golferData, setGolferData] = useState(data)

  return (
    <aside className={`slide-out ${!open ? 'slide-out--closed' : ''}`}>
      <button 
        className="slide-out__button"
        onClick={() => toggleSlideOut()}
      >
        <img src={cross} alt="close" />
      </button>
      <h2>{golfer === 'Leona' ? 'Leona' : 'Padraig'}</h2>
      <ul className="slide-out__cv">
      {golferData.PadraigHarrington.map((golfer) => (
        <li>{golfer.key}<span> {golfer.value}</span></li>
      ))}
      </ul>
    </aside>
  );
}