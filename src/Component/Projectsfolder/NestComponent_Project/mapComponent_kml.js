import React, { useState, useEffect, useRef } from "react";
import Map, { NavigationControl, FullscreenControl, Source, Layer } from "react-map-gl";
import { getallkml } from "../../../FeatureRedux/project/getKmlReducer";
import { useDispatch, useSelector } from "react-redux";
import { kml } from "@tmcw/togeojson";
import JSZip from "jszip";
import { DOMParser } from "xmldom";
import Cookies from 'js-cookie';
import axios from "axios";

const MapComponent = ({ kmlColor, kmlOpacity , projectid }) => {
  const dispatch = useDispatch();
  const mapRef = useRef(null);

  const [viewState, setViewState] = useState({
    latitude: 28.6139,
    longitude: 77.2090,
    zoom: 0,
  });

  const [multipleGeoJson, setMultipleGeoJson] = useState([]);
  const [fillColor, setFillColor] = useState("#0000ff");
  const [fillOpacity, setFillOpacity] = useState(0.4);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const kmlData = useSelector((state) => state.getallkml.data || {});

//   console.log(`this is kml data ${JSON.stringify(kmlData)}`);

  useEffect(() => {
    console.log(`this is project id in map ${projectid}`);
    
    dispatch(getallkml(projectid));
  }, [dispatch]);

  useEffect(() => {
    setFillColor(kmlColor || "#0000ff");
    setFillOpacity(kmlOpacity || 0.4);
  }, [kmlColor, kmlOpacity]);

//   useEffect(() => {
//     async function callapitogetcolor() {
//       try {
//         const response = await axios.get(`/api/reportinside/getopacity`, {
//           headers: {
//             'x-auth-token': localStorage.getItem('token'),
//             'x-report-id': Cookies.get('reportId')
//           }
//         });

//         if (response.data?.data?.opacity !== undefined && response.data?.data?.color !== undefined) {
//           setFillColor(response.data.data.color);
//           setFillOpacity(response.data.data.opacity);
//         }
//       } catch (error) {
//         console.error("Error fetching KML colors:", error);
//       }
//     }

//     callapitogetcolor();
//   }, []);

  // Function to fetch and convert KML/KMZ
  const fetchAndConvertKML = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      let kmlData;

      if (url.endsWith(".kmz")) {
        const zip = await JSZip.loadAsync(blob);
        const kmlFileName = Object.keys(zip.files).find((file) => file.endsWith(".kml"));
        if (!kmlFileName) {
          console.warn("No KML found in KMZ:", url);
          return null;
        }

        const kmlText = await zip.files[kmlFileName].async("text");
        kmlData = new DOMParser().parseFromString(kmlText, "text/xml");
      } else {
        const text = await blob.text();
        kmlData = new DOMParser().parseFromString(text, "text/xml");
      }

      const geoJson = kml(kmlData);
      if (!geoJson || !geoJson.features.length) {
        console.warn("Empty GeoJSON from KML:", url);
        return null;
      }

      return geoJson;
    } catch (error) {
      console.error("Error fetching/converting KML:", error);
      return null;
    }
  };

  useEffect(() => {
    if (kmlData?.kml?.length > 0) {
      const fetchAllKMLs = async () => {
        console.log(`this is kml data ${JSON.stringify(kmlData.kml)}`);
        
        // Extract URLs from kmlData
        const kmlUrls = kmlData.kml.map((item) => item.url);
        
        // Fetch and convert KML files to GeoJSON
        const geoJsonList = await Promise.all(kmlUrls.map(fetchAndConvertKML));
        
        const validGeoJsons = geoJsonList.filter(Boolean);
        setMultipleGeoJson(validGeoJsons);
  
        // Zoom to the first feature in the first valid GeoJSON
        if (validGeoJsons.length > 0 && validGeoJsons[0]?.features.length > 0) {
          const firstFeature = validGeoJsons[0].features[0];
          let newLatitude, newLongitude;
  
          if (firstFeature.geometry.type === "Point") {
            [newLongitude, newLatitude] = firstFeature.geometry.coordinates;
          } else if (firstFeature.geometry.type === "Polygon") {
            [newLongitude, newLatitude] = firstFeature.geometry.coordinates[0][0];
          } else if (firstFeature.geometry.type === "LineString") {
            [newLongitude, newLatitude] = firstFeature.geometry.coordinates[0];
          }
  
          if (newLatitude !== undefined && newLongitude !== undefined) {
            setTimeout(() => {
              mapRef.current?.easeTo({
                center: [newLongitude, newLatitude],
                zoom: 10,
                duration: 3000,
                easing: (t) => t * (2 - t),
              });
            }, 2000);
          }
        }
      };
  
      fetchAllKMLs();
    }
  }, [kmlData]);
  

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Map
        ref={mapRef}
        {...viewState}
        projection="globe"
        mapboxAccessToken="pk.eyJ1IjoibmlraXRhY2hhdWhhbjEyMyIsImEiOiJjbGwwaWxrdzEwZW02M2pxcjN4eHo1bDR1In0.I4yZh8CAQOz2c63IsCBOpg"
        style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        mapStyle="mapbox://styles/mapbox/satellite-v9"
        onMove={(evt) => setViewState(evt.viewState)}
        onClick={(event) => {
                    const features = event.target.queryRenderedFeatures(event.point);
                    if (features.length > 0) {
                      setHoveredFeature(features[0].properties);
                      setCursor({ x: event.point.x, y: event.point.y });
                    } else {
                      setHoveredFeature(null);
                    }
                  }}
      >
        <NavigationControl position="top-right" />
        <FullscreenControl position="top-right" />

        {multipleGeoJson.map((geoJson, index) => (
          <Source key={`source-${index}`} id={`source-${index}`} type="geojson" data={geoJson}>
            {geoJson.features.map((feature, idx) => {
              if (!feature.geometry || !feature.geometry.type) return null;

              let layerProps = {};
              switch (feature.geometry.type) {
                case "LineString":
                  layerProps = {
                    type: "line",
                    paint: {
                      "line-color": "#ff0000",
                      "line-width": 3,
                      "line-opacity": 1
                    }
                  };
                  break;

                case "Polygon":
                case "MultiPolygon":
                  layerProps = {
                    type: "fill",
                    paint: {
                      "fill-color": fillColor,
                      "fill-opacity": fillOpacity,
                    },
                  };
                  break;

                case "Point":
                  layerProps = {
                    type: "circle",
                    paint: {
                      "circle-radius": 6,
                      "circle-color": "#ff0000",
                    },
                  };
                  break;
              }

              return <Layer key={`layer-${index}-${idx}`} id={`layer-${index}-${idx}`} {...layerProps} />;
            })}
          </Source>
        ))}

         {hoveredFeature && (
          <div
            style={{
              position: "absolute",
              left: cursor.x + 10,
              top: cursor.y + 10,
              backgroundColor: "white",
              color: "black",
              padding: "5px 10px",
              borderRadius: "5px",
              pointerEvents: "none",
              fontSize: "20px",
              height: "100px"
            }}
          >
            {hoveredFeature.name ? `Name: ${hoveredFeature.name}` : "Unnamed Feature"}
          </div>
        )}
      </Map>
    </div>
  );
};

export default MapComponent;