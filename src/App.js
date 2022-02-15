import logo from './logo.svg';
import './App.css';
import Loca from './component/loca/loca';
import { useState,useEffect } from 'react';



function App() {

  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)
  const [posRecup, setPosRecup] = useState(false)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
      
  })
  }, [])

  useEffect(() => {
    if (lat !== 0 && lon !== 0) {
      setPosRecup(true)
    }
  }, [lat, lon])
  
  return (
    <div className="App">
      <h1>Vous êtes connecté.e de  : </h1>
      {posRecup ? (
        <Loca className="map" lat={lat} lon={lon}/>
      ) : (
        <p>Récupération de la position</p>
      )}

    </div>
  );
}

export default App;
