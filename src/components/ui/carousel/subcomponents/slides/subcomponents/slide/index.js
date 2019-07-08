import React from 'react';

export default function slide({ name, address, description, golfer, index, activePoint }) {
  return (
    <div className={`slide ${activePoint === index ? 'slide--active' : ''}${activePoint < index ? 'after' : ''}`}>
      <img
        className="slide__img"
        src="https://via.placeholder.com/400x200"
        alt={`${name}`}
      />
      <section className="slide__content">
        <h2>
          {name}
        </h2>
        <h3>
          {address}
        </h3>
        <h4>
          {`${golfer} says:`}
        </h4>
        <p>
          {description}
        </p>
      </section>
    </div>
  );
}