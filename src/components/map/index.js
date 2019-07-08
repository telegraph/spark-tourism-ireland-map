import React, {useState, useEffect} from 'react';
import ReactMapboxGl, { Layer, Feature, map } from 'react-mapbox-gl';
import Poi from './subcomponents/poi';
import './style.scss';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1Ijoic3BhcmtkaWdpdGFsZGVzaWduIiwiYSI6ImNpbmxvdmtkODAwOWV3OW0yNHB0MmlpengifQ.aUYjuUMvA3kB3Bg0aO3SeQ'
})



export default function MapContainer({ data, activePoint, activePointSetter }) {
  const [centerCord, setCenterCord] = useState({lon: '-7.77832031', lat: '53.2734'});
  
  useEffect(() => {
    if(activePoint === -1) {
      setCenterCord({lon: '-7.77832031', lat: '53.2734'});
    } else {
      setCenterCord({lon: `${data[activePoint].long}`, lat: `${data[activePoint].lat}`});
    }
  }, [activePoint]);


  return (
    <div className="map">
      <span className={`map__prompt ${activePoint !== -1 ? 'hidden' : ''}`}>Select a map pin below</span>
      <Map
        style="mapbox://styles/sparkdigitaldesign/cinrc6fmy00ckc7m5v3ktd8v4"
        containerStyle={{
          height: "100%",
          width: "100%"
        }}
        center={centerCord}
        zoom={[7.4]}
      >
        <Poi
        poi={data}
        activePoint={activePoint}
        activePointSetter={activePointSetter}
        />
      </Map>
    </div>
  );
}