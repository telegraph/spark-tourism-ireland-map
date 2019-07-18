import React, { useState, useRef, useEffect } from 'react';
import Slides from './subcomponents/slides';
import Controls from './subcomponents/controls';
import MobileGallery from './subcomponents/mobileGallery';
import CTA from './subcomponents/cta';
import SlideOut from './subcomponents/slideout';
import './style.scss';

export default function Carousel( { data, activePoint, toggleActive, activePointSetter, isNavVisible } ) {

  const carouselRef = useRef(null);

  const [mobileImg, setMobileImg] = useState(false);
  const [currentGallery, setCurrentGallery] = useState(null);
  const [slideOut, setSlideOut] = useState(null);
  const [golfer, setGolfer] = useState(null);

  useEffect(() => {
    // when user changes slide make sure slide is always scrolled to top
    carouselRef.current.scrollTop = 0;
    toggleSlideOut(null, true);
  }, [activePoint])

  const toggleGallery = (image) => {
    // open gallery and set image to current slide
    setMobileImg(!mobileImg ? true : false);
    setCurrentGallery(image);
  }

  const toggleSlideOut = (golfer, force) => {
    // force slide out to close if true
    if (force) {
      setSlideOut(false);
    } else {
      // toggle it otherwise and set golfer
      setSlideOut(!slideOut ? true : false);
      setGolfer(golfer);
    }
  }

  return(
    <aside ref={carouselRef} className={`carousel ${activePoint === -1 ? 'carousel--first-slide' : ''}`}>
      <SlideOut toggleSlideOut={toggleSlideOut} open={slideOut} golfer={golfer} />
      {mobileImg && <MobileGallery image={currentGallery} toggleGallery={toggleGallery} />}
      <Slides slides={data} activePoint={activePoint} activePointSetter={activePointSetter} toggleGallery={toggleGallery} toggleSlideOut={toggleSlideOut} />
      <CTA isCtaVisible={isNavVisible} />
      <Controls slides={data.length} activePoint={activePoint} toggleActive={toggleActive} isNavVisible={isNavVisible} />
    </aside>
  )
}