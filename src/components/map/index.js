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
    setCenterCord({lon: `${data[activePoint].long}`, lat: `${data[activePoint].lat}`});
  }, [activePoint]);


  return (
    <div className="map">
      <Map
        style="mapbox://styles/mapbox/streets-v11"
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