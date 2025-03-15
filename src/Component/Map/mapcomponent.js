import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import omnivore from "leaflet-omnivore";

const KML_URL =
  "https://res.cloudinary.com/dziyqo8zo/raw/upload/v1739772281/Sheohar_AOI_fmlqcd.kml";

const KMLLayer = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // Load KML using leaflet-omnivore
    const kmlLayer = omnivore.kml(KML_URL);

    kmlLayer.on("ready", () => {
      map.fitBounds(kmlLayer.getBounds());
    });

    kmlLayer.addTo(map);

    return () => {
      map.removeLayer(kmlLayer);
    };
  }, [map]);

  return null;
};

const MapComponent = () => {
  return (
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={4}
      style={{ height: "50vh", width: "94%", margin: "auto", borderRadius: "10px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <KMLLayer />
    </MapContainer>
  );
};

export default MapComponent;
