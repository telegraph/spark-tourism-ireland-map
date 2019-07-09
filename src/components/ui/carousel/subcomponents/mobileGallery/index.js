import React from 'react';
import cross from '../../../../../assets/ui/cross.svg';
import './style.scss';

export default function MobileGallery({activePoint, toggleGallery, image}) {
  return(
    <div className="gallery">
      <button
        className="mobile-gallery__button"
        onClick={() => toggleGallery()}
        ><img src={cross} alt="close" />
      </button>
      <div className="img">
        <img src={`${process.env.PUBLIC_URL}/courses/${image}`} alt="gallery" /> 
      </div>
      
    </div>
  )
}