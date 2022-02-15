import GoogleMapReact from "google-map-react";
import "./loca.css"
import Marker from "./Marker.tsx"


const Loca = (props) =>{

    const{lat,lon}= props
    


 return(
    <div className="map" style={{  height: '50vh', width: '50%' }}>
    <GoogleMapReact 
        googleMapsApiKey="AIzaSyAdgm1cxrqhidU_35UzrPRGRwwDQstpnoo"
        defaultCenter={[lat, lon]}
        defaultZoom={11}
        text="My Marker"
        >
          <Marker
            lat= {lat}
            lng={lon}
            name="My Marker"
            color="red"
          />
       
      
    </GoogleMapReact>
    
    </div>
 );
 
}

 export default Loca;
 //ma clé : AIzaSyAdgm1cxrqhidU_35UzrPRGRwwDQstpnoo