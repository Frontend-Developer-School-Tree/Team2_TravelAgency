import React from "react";
// import {Container} from './CardMapsStyled'
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CardMapsStyled.css";
import { ApiContext } from "../../ApiContext";

const CardMaps = () => {
  const { dataApi } = React.useContext(ApiContext);
  console.log("markers", dataApi.rows);
  const mapPositions = [41.2925, 12.5736];

  return (
    <MapContainer
      className="map"
      center={[mapPositions[0], mapPositions[1]]}
      zoom={5}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {dataApi.rows.map((row) =>
        row.places.map((places) =>
          console.log("coordinates",places.position.coords)
        )
      )}
    </MapContainer>
  );
};

export default CardMaps;
