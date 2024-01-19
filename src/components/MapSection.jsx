import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import locationMarker from "../../public/images/icon-location.svg";

export default function MapSection({ gridPosition }) {
  const markerIcon = L.icon({
    iconUrl: locationMarker,
    iconSize: [30, 45],
    iconAnchor: [12, 12],
    popupAnchor: [0, 0],
  });

  return (
    <div className="map">
      {gridPosition && (
        <MapContainer
          key={gridPosition[0].toString()}
          center={gridPosition}
          zoom={15}
          scrollWheelZoom={false}
          style={{ height: "100vh", width: "100%" }}
        >
          <TileLayer
            attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={gridPosition} icon={markerIcon}></Marker>
        </MapContainer>
      )}
    </div>
  );
}
