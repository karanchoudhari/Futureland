 
// import React, { useState } from 'react';
// import Map, { NavigationControl, FullscreenControl, GeolocateControl } from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// const Mapbox = () => {
//   const [viewState, setViewState] = useState({
//     latitude: 28.6139,
//     longitude: 77.2090,
//     zoom: 4,
//   });

//   console.log("loggn","https://res.cloudinary.com/dziyqo8zo/raw/upload/v1739772281/Sheohar_AOI_fmlqcd.kml")
//   console.log(`conv file ${omniore.kml.parse("https://res.cloudinary.com/dziyqo8zo/raw/upload/v1739772281/Sheohar_AOI_fmlqcd.kml")}`)
//   return (
//     <div style={{ height: '100%', width: '100%', position: 'relative', boxShadow: '1px 1px 10px 2px white' }}>
//       <Map
//         {...viewState}
//         mapboxAccessToken={
//           process.env.REACT_APP_MAPBOX_ACCESS_TOKEN ||
//           'pk.eyJ1IjoibmlraXRhY2hhdWhhbjEyMyIsImEiOiJjbGwwaWxrdzEwZW02M2pxcjN4eHo1bDR1In0.I4yZh8CAQOz2c63IsCBOpg'
//         }
//         style={{ width: '100%', height: '100%' }}
//         mapStyle="mapbox://styles/mapbox/streets-v12"
//         onMove={(evt) => setViewState(evt.viewState)}
//       >
//         <NavigationControl position="top-right" />
//         <FullscreenControl position="top-right" />
//         <GeolocateControl position="top-right" trackUserLocation={true} showUserHeading={true} />
//       </Map>
//     </div>
//   );
// };

// export default Mapbox;
 




import React, { useState, useEffect } from 'react';
import Map, { NavigationControl, FullscreenControl, GeolocateControl, Source, Layer } from 'react-map-gl';
import axios from 'axios';
import { DOMParser } from 'xmldom';
import { kml } from '@tmcw/togeojson';
import 'mapbox-gl/dist/mapbox-gl.css';

const Mapbox = () => {
  const [viewState, setViewState] = useState({
    latitude: 28.6139,
    longitude: 77.2090,
    zoom: 10,
  });

  const [geoJsonData, setGeoJsonData] = useState(null);

  const KML_URL = "https://res.cloudinary.com/dziyqo8zo/raw/upload/v1739772281/Sheohar_AOI_fmlqcd.kml";

  useEffect(() => {
    const fetchAndConvertKML = async () => {
      try {
        console.log("Fetching KML from:", KML_URL);
        const response = await axios.get(KML_URL);
        const kmlText = response.data;

        // Convert KML to GeoJSON
        const parser = new DOMParser();
        const kmlData = parser.parseFromString(kmlText, 'text/xml');
        const geoJson = kml(kmlData);

        console.log("Converted GeoJSON:", geoJson);
        setGeoJsonData(geoJson);
      } catch (error) {
        console.error("Error fetching or converting KML:", error);
      }
    };

    fetchAndConvertKML();
  }, []);

  return (
    
    <div style={{ height: '100%', width: '100%', position: 'relative', }}>
      {/* <Map
        {...viewState}
        mapboxAccessToken={
          process.env.REACT_APP_MAPBOX_ACCESS_TOKEN ||
          'pk.eyJ1IjoibmlraXRhY2hhdWhhbjEyMyIsImEiOiJjbGwwaWxrdzEwZW02M2pxcjN4eHo1bDR1In0.I4yZh8CAQOz2c63IsCBOpg'
        }
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        onMove={(evt) => setViewState(evt.viewState)}
      > */}


<Map
  {...viewState}
  projection="globe"
  mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN ||
    'pk.eyJ1IjoibmlraXRhY2hhdWhhbjEyMyIsImEiOiJjbGwwaWxrdzEwZW02M2pxcjN4eHo1bDR1In0.I4yZh8CAQOz2c63IsCBOpg'}
  style={{ width: '100%', height: '100%' }}
  mapStyle="mapbox://styles/mapbox/satellite-v9"
  onMove={(evt) => setViewState(evt.viewState)}
>

        <NavigationControl position="top-right" />
        <FullscreenControl position="top-right" />

        {/* Display the converted KML as a GeoJSON source */}
        {geoJsonData && (
          <Source id="kml-data" type="geojson" data={geoJsonData}>
            <Layer
              id="kml-layer"
              type="line"
              paint={{
                'line-color': '#ff0000',
                'line-width': 2,
              }}
            />
          </Source>
        )}
      </Map>
    </div>
  );
};

export default Mapbox;



 