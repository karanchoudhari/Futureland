// import React from 'react';

// const Worldmapcard = () => {
//   return (
//     <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full">
//       <h2 className="text-xl font-semibold mb-4 text-white">World Map</h2>
//       <div className="bg-gray-700 p-4 rounded-lg">
//         {/* Placeholder for the world map */}
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
//           alt="World Map"
//           className="w-full h-auto rounded-lg"
//         />
//       </div>
//     </div>
//   );
// };

// export default Worldmapcard;
import React, { useState } from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Worldmapcard = () => {
  const [isSatelliteView, setIsSatelliteView] = useState(false);

  // Mapbox Satellite Tile Layer URL
  const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibmlraXRhY2hhdWhhbjEyMyIsImEiOiJjbGwwaWxrdzEwZW02M2pxcjN4eHo1bDR1In0.I4yZh8CAQOz2c63IsCBOpg'; // Your Mapbox token
  const satelliteTileUrl = `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}`;

  // OpenStreetMap Tile Layer URL
  const standardTileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full">
      <h2 className="text-xl font-semibold mb-4 text-white">World Map</h2>
      <div className=" p-4 rounded-lg">
        {/* Toggle Button for Satellite View */}
        <button
          onClick={() => setIsSatelliteView(!isSatelliteView)}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          {isSatelliteView ? 'Switch to Standard View' : 'Switch to Satellite View'}
        </button>

        {/* Map Container */}
        <MapContainer
          center={[20, 0]} // Initial map center coordinates
          zoom={2} // Initial zoom level
          zoomControl={false} // Disable default zoom control
          className="w-full h-96 rounded-lg" // Set map height and rounded corners
          style={{ position: 'relative' }} // Ensure proper positioning
        >
          {/* TileLayer for Map */}
          <TileLayer
            url={isSatelliteView ? satelliteTileUrl : standardTileUrl}
            attribution={
              isSatelliteView
                ? '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
                : '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }
          />
          {/* Custom Zoom Control */}
          <ZoomControl position="topright" />
        </MapContainer>
      </div>
    </div>
  );
};

export default Worldmapcard;