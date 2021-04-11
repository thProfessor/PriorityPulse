import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./MapPage.css";

function MapPage({ officex, officey }) {
  return (
    <div>
      <MapContainer center={[25, 80]} zoom={10}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>
          contributors'
        />

        <Marker position={[25, 80]}>
          <Popup>Office</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapPage;
