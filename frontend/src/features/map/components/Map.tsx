import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-shadow.png";

import useSubmissions from "../../submissions/hooks/useSubmissions";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Map = () => {
  const { submissions } = useSubmissions();
  
  return (
    <MapContainer
      center={[58.5256, 31.2742]}
      zoom={13}
      scrollWheelZoom={true}
      className="flex-1"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?lang=fr"
      />
      {submissions?.map((submission) => (
        <Marker position={[submission.lat, submission.lng]} key={submission.id}>
          <Popup>
            <Link to={`/submissions/${submission.id}`}>{submission.title}</Link>
          </Popup>
        </Marker>
      ))}
      <DetectClick />
    </MapContainer>
  );
};

const DetectClick = () => {
  const navigate = useNavigate();
  useMapEvent("click", (e) =>
    navigate(`?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
  );
  return null;
};

export default Map;
