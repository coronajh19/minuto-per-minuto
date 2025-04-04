import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/map.css";
import L from "leaflet";

// Icono default fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

function MapLugares({ lugares }) {
  return (
    <MapContainer
      center={[43.3619, -5.8494]} // centro por defecto: Oviedo
      zoom={12}
      className="leaflet-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {lugares.map((place, index) => (
        <Marker key={index} position={place.coords}>
          <Popup>
            <strong>{place.name}</strong>
            <br />
            {place.address}
            <br />
            {place.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapLugares;
