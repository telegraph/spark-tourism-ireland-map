import React, {useState} from 'react';
import {Layer, Feature, Popup} from 'react-mapbox-gl';
import './style.scss';


export default function Poi({ poi, activePointSetter, activePoint}) {

  const [hovered, setHovered] = useState(null);
  
  return (
    <>
      <Layer
        type="symbol"
        layout={{"icon-image": "marker-15"}}
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
            style={{
              opacity: `${(hovered === i) || (activePoint === i) ? 1 : 0 }`,
              top: `${(hovered === i) || (activePoint === i) ? '0px' : '5px'}`
            }}
          >
            <p>{marker.name}</p>
          </Popup>
        ))}
    </>
  )
}