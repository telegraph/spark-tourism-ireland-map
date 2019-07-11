import React, { useRef, useEffect } from 'react';
import gallery from '../../../../../../../assets/ui/gallery.svg';

export default function Slide({ image, name, location, description, golfer, index, activePoint, toggleGallery }) {

  return (
    <div className={`slide ${activePoint === index ? 'slide--active' : ''}${activePoint < index ? 'after' : ''} ${golfer === 'Leona' ? 'leona' : 'padraig'}`}>
      <div className="slide__img">
        <img
          src={`${process.env.PUBLIC_URL}/courses/${image}`}
          alt={`${name}`}
        />
      </div>
      <section className="slide__content">
        <button 
          className="map__button map__button--gallery"
          onClick={() => {toggleGallery(image)}}
        >
          <img src={gallery} alt="gallery" />
        </button>
        <h2>
          {name}
        </h2>
        <h3>
          {location}
        </h3>
        <p>
          {`${golfer} says:`}
        </p>
        <p>
          {description}
        </p>
      </section>
    </div>
  );
}