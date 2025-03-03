"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from 'leaflet'
import "leaflet/dist/leaflet.css";

const position: [number, number] = [6.668742149557078, 3.274987921063896];

const customMarker = new L.Icon({
  iconUrl: "/marker.svg", // Path to your custom SVG in the public folder
  iconSize: [30, 40], // Adjust size as needed
  iconAnchor: [15, 40], // Anchor point
  popupAnchor: [0, -35], // Popup positioning
});

export default function MapComponentClient() {

  return (
    <MapContainer
      key={position.toString()}
      center={position}
      zoom={13}
      className="h-96 w-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker
        position={position}
        icon={customMarker}
      >
        <Popup>Our Restaurant</Popup>
      </Marker>
    </MapContainer>
  );
}
