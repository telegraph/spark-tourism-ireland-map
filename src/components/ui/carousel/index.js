import React, {useState} from 'react';
import Slides from './subcomponents/slides';
import Controls from './subcomponents/controls';
import MobileGallery from './subcomponents/mobileGallery';
import './style.scss';

export default function Carousel( { data, activePoint, toggleActive, activePointSetter, isNavVisible } ) {

  const [mobileImg, setMobileImg] = useState(false);
  const [currentGallery, setCurrentGallery] = useState(null);

  const toggleGallery = (image) => {
    // open gallery and set image to current slide
    setMobileImg(!mobileImg ? true : false);
    setCurrentGallery(image);
  }

  return(
    <aside className={`carousel ${activePoint === -1 ? 'carousel--first-slide' : ''}`}>
      {mobileImg && <MobileGallery image={currentGallery} toggleGallery={toggleGallery} />}
      <Slides slides={data} activePoint={activePoint} activePointSetter={activePointSetter} toggleGallery={toggleGallery} />
      <Controls slides={data.length} activePoint={activePoint} toggleActive={toggleActive} isNavVisible={isNavVisible} />
    </aside>
  )
}