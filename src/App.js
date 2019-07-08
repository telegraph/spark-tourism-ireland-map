import React, { useEffect, useState } from 'react';
import Header from './components/ui/header';
import MapContainer from './components/map';
import Carousel from './components/ui/carousel';
import { DummyData } from './dummyData';
import './App.scss';

function App() {
  const [data, setData] = useState(DummyData);
  const [activePoint, setActivePoint] = useState(0);

  const activePointSetter = (index) => {
    setActivePoint(index);
  }

  const fetchData = () => {
    // Fetches json from google spreadsheet
    fetch('https://spreadsheets.google.com/feeds/cells/1KYt3EoeS6nlKF10KsqXdgL18yPm308_fyjgUiNnhXdA/od6/public/values?alt=json')
      .then(
        (response) => {
          return response.json();
        }
      )
      .then(
        (json) => {
          // parsedData(json.feed.entry);
        }
      );
  }

  const toggleActive = (direction, e) => {
    e.preventDefault();


    if (activePoint >= 0 && activePoint < data.length) {
      setActivePoint((activePoint) => direction === "back" ? activePoint - 1 : activePoint + 1);
    }
  }

  return (
    <div className="container">
      <Header />
      <Carousel data={data} activePoint={activePoint} toggleActive={toggleActive} />
      <MapContainer data={data} activePoint={activePoint} activePointSetter={activePointSetter} />
    </div>
  );
}

export default App;
