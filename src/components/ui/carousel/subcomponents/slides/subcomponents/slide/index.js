import React from 'react';

export default function slide({ image, name, address, description, golfer, index, activePoint }) {
  return (
    <div className={`slide ${activePoint === index ? 'slide--active' : ''}${activePoint < index ? 'after' : ''} ${golfer === 'leona' ? 'leona' : 'padraig'}`}>
      <div className="slide__img">
        <img
          src={`${process.env.PUBLIC_URL}/courses/${image}`}
          alt={`${name}`}
        />
      </div>
      <section className="slide__content">
        <h2>
          {name}
        </h2>
        <h3>
          {address}
        </h3>
        <p>
          <b>
            {`${golfer} says:`}
          </b>
        </p>
        <p>
          {description}
        </p>
      </section>
    </div>
  );
}