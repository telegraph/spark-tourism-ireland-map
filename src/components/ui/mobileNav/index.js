import React from 'react';
import cross from '../../../assets/ui/cross.svg';
import './style.scss';

export default function MobileNav({courses, toggle, isOpen, activePointSetter}) {



  return (
    <div className={`mobile-nav ${isOpen ? 'mobile-nav--open' : ''}`}>
      <button
        className="mobile-nav__button"
        onClick={() => toggle()}
        ><img src={cross} alt="close" /></button>
      <h2>Select a course</h2>
      <ul>
        {courses.map((course, i) => (
          <li
            onClick={() => {
              activePointSetter(i);
            }}
          >{course.name}</li>
        ))}
      </ul>
    </div>
  );
}