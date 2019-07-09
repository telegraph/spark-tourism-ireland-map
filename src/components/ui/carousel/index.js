import React, {useState} from 'react';
import Slides from './subcomponents/slides';
import Controls from './subcomponents/controls';
import MobileGallery from './subcomponents/mobileGallery';
import './style.scss';

export default function Carousel( { data, activePoint, toggleActive, activePointSetter, isNavVisible } ) {

  const [mobileImg, setMobileImg] = useState(false);

  const toggleGallery = () => {
    setMobileImg(!mobileImg ? true : false);
  }

  return(
    <aside className={`carousel ${activePoint === -1 ? 'carousel--first-slide' : ''}`}>
      {mobileImg && <MobileGallery img={activePoint} toggleGallery={toggleGallery} />}
      <Slides slides={data} activePoint={activePoint} activePointSetter={activePointSetter} toggleGallery={toggleGallery} />
      <Controls slides={data.length} activePoint={activePoint} toggleActive={toggleActive} isNavVisible={isNavVisible} />
    </aside>
  )
}