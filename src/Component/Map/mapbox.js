//  import React, { useState, useEffect } from 'react';
// import Map, { NavigationControl, FullscreenControl, GeolocateControl, Source, Layer } from 'react-map-gl';
// import axios from 'axios';
// import { DOMParser } from 'xmldom';
// import { kml } from '@tmcw/togeojson';
// import 'mapbox-gl/dist/mapbox-gl.css';

// const Mapbox = () => {
//   const [viewState, setViewState] = useState({
//     latitude: 28.6139,
//     longitude: 77.2090,
//     zoom: 10,
//   });

//   const [geoJsonData, setGeoJsonData] = useState(null);

//   const KML_URL = "https://res.cloudinary.com/dziyqo8zo/raw/upload/v1739772281/Sheohar_AOI_fmlqcd.kml";

//   useEffect(() => {
//     const fetchAndConvertKML = async () => {
//       try {
//         console.log("Fetching KML from:", KML_URL);
//         const response = await axios.get(KML_URL);
//         const kmlText = response.data;

//         // Convert KML to GeoJSON
//         const parser = new DOMParser();
//         const kmlData = parser.parseFromString(kmlText, 'text/xml');
//         const geoJson = kml(kmlData);

//         console.log("Converted GeoJSON:", geoJson);
//         setGeoJsonData(geoJson);
//       } catch (error) {
//         console.error("Error fetching or converting KML:", error);
//       }
//     };

//     fetchAndConvertKML();
//   }, []);

//   return (

//     <div style={{ height: '100%', width: '100%', position: 'relative', }}>
//       <Map
//         {...viewState}
//         projection="globe"
//         mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN ||
//           'pk.eyJ1IjoibmlraXRhY2hhdWhhbjEyMyIsImEiOiJjbGwwaWxrdzEwZW02M2pxcjN4eHo1bDR1In0.I4yZh8CAQOz2c63IsCBOpg'}
//         style={{ width: '100%', height: '100%' }}
//         mapStyle="mapbox://styles/mapbox/satellite-v9"
//         onMove={(evt) => setViewState(evt.viewState)}
//       >

//         <NavigationControl position="top-right" />
//         <FullscreenControl position="top-right" />

//         {/* Display the converted KML as a GeoJSON source */}
//         {geoJsonData && (
//           <Source id="kml-data" type="geojson" data={geoJsonData}>
//             <Layer
//               id="kml-layer"
//               type="line"
//               paint={{
//                 'line-color': '#ff0000',
//                 'line-width': 2,
//               }}
//             />
//           </Source>
//         )}
//       </Map>
//     </div>
//   );
// };

// export default Mapbox;


// import React, { useState, useEffect } from 'react';
// import Map, { NavigationControl, FullscreenControl, Source, Layer } from 'react-map-gl';
// import axios from 'axios';
// import { DOMParser } from 'xmldom';
// import { kml } from '@tmcw/togeojson';
// import 'mapbox-gl/dist/mapbox-gl.css';

// const Mapbox = () => {
//   const [viewState, setViewState] = useState({
//     latitude: 20.5937, // Centered over India
//     longitude: 78.9629,
//     zoom: 3, // Zoomed out to show more of the globe
//     pitch: 0,
//     bearing: 0,
//   });

//   const [geoJsonData, setGeoJsonData] = useState(null);

//   const KML_URL = "https://res.cloudinary.com/dziyqo8zo/raw/upload/v1739772281/Sheohar_AOI_fmlqcd.kml";

//   useEffect(() => {
//     const fetchAndConvertKML = async () => {
//       try {
//         const response = await axios.get(KML_URL);
//         const kmlText = response.data;

//         // Convert KML to GeoJSON
//         const parser = new DOMParser();
//         const kmlData = parser.parseFromString(kmlText, 'text/xml');
//         const geoJson = kml(kmlData);

//         setGeoJsonData(geoJson);
//       } catch (error) {
//         console.error("Error fetching or converting KML:", error);
//       }
//     };

//     fetchAndConvertKML();
//   }, []);

//   return (
//     <div style={{ height: '100%', width: '100%', position: 'relative' }}>
//       <Map
//         {...viewState}
//         mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN ||
//           'pk.eyJ1IjoibmlraXRhY2hhdWhhbjEyMyIsImEiOiJjbGwwaWxrdzEwZW02M2pxcjN4eHo1bDR1In0.I4yZh8CAQOz2c63IsCBOpg'}
//         style={{ width: '100%', height: '100%' }}
        
//         // ✅ Use Globe Projection
//         projection="globe"

//         // ✅ Satellite with Labels (City names, roads, etc.)
//         mapStyle="mapbox://styles/mapbox/satellite-streets-v12"

//         onMove={(evt) => setViewState(evt.viewState)}
//       >
//         <NavigationControl position="top-right" />
//         <FullscreenControl position="top-right" />

//         {/* Display the converted KML as a GeoJSON source */}
//         {geoJsonData && (
//           <Source id="kml-data" type="geojson" data={geoJsonData}>
//             <Layer
//               id="kml-layer"
//               type="line"
//               paint={{
//                 'line-color': '#ff0000',
//                 'line-width': 2,
//               }}
//             />
//           </Source>
//         )}
//       </Map>
//     </div>
//   );
// };

// export default Mapbox;
import React, { useState, useEffect, useRef } from 'react';
import Map, { NavigationControl, FullscreenControl, Source, Layer } from 'react-map-gl';
import axios from 'axios';
import { DOMParser } from 'xmldom';
import { kml } from '@tmcw/togeojson';
import 'mapbox-gl/dist/mapbox-gl.css';

const Mapbox = () => {
  const [viewState, setViewState] = useState({
    latitude: 20.5937, // Centered over India
    longitude: 78.9629,
    zoom: 0.5, // Start fully zoomed out
    pitch: 0,
    bearing: 180, // Start rotated 180 degrees (showing the "back" of the globe)
  });

  const [geoJsonData, setGeoJsonData] = useState(null);
  const mapRef = useRef(null);
  const animationRef = useRef(null);

  const KML_URL = "https://res.cloudinary.com/dziyqo8zo/raw/upload/v1739772281/Sheohar_AOI_fmlqcd.kml";

  useEffect(() => {
    const fetchAndConvertKML = async () => {
      try {
        const response = await axios.get(KML_URL);
        const kmlText = response.data;

        // Convert KML to GeoJSON
        const parser = new DOMParser();
        const kmlData = parser.parseFromString(kmlText, 'text/xml');
        const geoJson = kml(kmlData);

        setGeoJsonData(geoJson);
      } catch (error) {
        console.error("Error fetching or converting KML:", error);
      }
    };

    fetchAndConvertKML();
  }, []);

  useEffect(() => {
    // Animation for rotating and zooming in
    const animateGlobe = () => {
      const startTime = Date.now();
      const duration = 4000; // 4 seconds for smoother animation
      const startZoom = 0.5;
      const endZoom = 3;
      const startBearing = 180;
      const endBearing = 0;

      const animateFrame = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        
        // Cubic easing function for extra smoothness
        const easeProgress = progress < 0.5 
          ? 4 * progress * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        const newZoom = startZoom + (endZoom - startZoom) * easeProgress;
        const newBearing = startBearing + (endBearing - startBearing) * easeProgress;

        setViewState(prev => ({
          ...prev,
          zoom: newZoom,
          bearing: newBearing,
        }));

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animateFrame);
        }
      };

      animationRef.current = requestAnimationFrame(animateFrame);
    };

    // Start animation after a small delay to ensure map is loaded
    const timer = setTimeout(animateGlobe, 1000);

    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      <Map
        {...viewState}
        ref={mapRef}
        mapboxAccessToken={
          'pk.eyJ1IjoibmlraXRhY2hhdWhhbjEyMyIsImEiOiJjbGwwaWxrdzEwZW02M2pxcjN4eHo1bDR1In0.I4yZh8CAQOz2c63IsCBOpg'}
        style={{ width: '100%', height: '100%' }}
        
        // ✅ Use Globe Projection
        projection="globe"

        // ✅ Satellite with Labels (City names, roads, etc.)
        mapStyle="mapbox://styles/mapbox/satellite-streets-v12"

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