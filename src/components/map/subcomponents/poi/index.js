import React, {useState} from 'react';
import {Layer, Feature, Popup} from 'react-mapbox-gl';
import greenMarker from '../../../../assets/location-green.svg';
import './style.scss';

const greenMarkerIcon = new Image(52, 47.2);
greenMarkerIcon.src = greenMarker;
const locationIcon = ['festivalPin', greenMarkerIcon];

// Define layout to use in Layer component
const festivalsLayout = {
  'icon-image': 'festivalPin',
  'icon-size': 0.5,
  'icon-allow-overlap': true,
  'icon-ignore-placement': true,
  'icon-anchor': 'bottom'
};

export default function Poi({ poi, activePointSetter, activePoint}) {

  const [hovered, setHovered] = useState(null);
  
  return (
    <>
      <Layer
        type="symbol"
        layout={{"icon-image": "harbor-15"}}
      >
        {poi.map((point, i) => (
          <Feature
            coordinates={[point.long, point.lat]}
            onMouseEnter={(map, e) => {
              setHovered(i)
            }}
            onMouseLeave={(map, e) => {
              setHovered(null);
            }}
            onClick={(map, e) => {
              activePointSetter(i)
            }}
          />
        ))}
      </Layer>
      {poi.map((marker, i) => (
          <Popup
            coordinates={[marker.long, marker.lat]}
            style={{opacity: `${(hovered === i) || (activePoint === i) ? 1 : 0 }`}}
          >
            <p>{marker.name}</p>
          </Popup>
        ))}
    </>
  )
}