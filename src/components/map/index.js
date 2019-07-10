import React, {useState, useEffect} from 'react';
import ReactMapboxGl, { Layer, Feature, map } from 'react-mapbox-gl';
import Poi from './subcomponents/poi';
import Social from '../ui/social';
import shareIcon from '../../assets/ui/share.svg';
import hamburger from '../../assets/ui/hamburger.svg';
import './style.scss';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1Ijoic3BhcmtkaWdpdGFsZGVzaWduIiwiYSI6ImNpbmxvdmtkODAwOWV3OW0yNHB0MmlpengifQ.aUYjuUMvA3kB3Bg0aO3SeQ'
})



export default function MapContainer({ data, activePoint, activePointSetter, toggleMobileNav }) {
  const [centerCord, setCenterCord] = useState({lon: '-7.77832031', lat: '53.2734'});
  const [shareMenu, setShareMenu] = useState(false);
  
  useEffect(() => {
    if(activePoint === -1) {
      setCenterCord({lon: '-7.77832031', lat: '53.2734'});
    } else {
      setCenterCord({lon: `${data[activePoint].long}`, lat: `${data[activePoint].lat}`});
    }
  }, [activePoint]);


  return (
    <div className={`map ${activePoint === -1 ? 'map--first-slide' : ''}`}>
      <span className={`map__prompt ${activePoint !== -1 ? 'hidden' : ''}`}>Select a map pin below</span>
      <button
        className="map__button map__button--menu"
        onClick={() => toggleMobileNav()}
        ><img src={hamburger} alt="menu" /></button>
      <button
        className="map__button map__button--share"
        onClick={() => setShareMenu(!shareMenu ? true : false)}
      >
          <img src={shareIcon} alt="share" />
      </button>
      <Social open={shareMenu} />

      <Map
        style="mapbox://styles/sparkdigitaldesign/cjxuni5kp0g901crv3a81b3db"
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