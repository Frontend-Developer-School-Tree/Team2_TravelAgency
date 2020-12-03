import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./CardMapsStyled.css";
import { ApiContext } from "../../ApiContext";

// delete Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//     iconUrl: require('leaflet/dist/images/marker-icon.png'),
//     shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });

const CardMaps = () => {
  const { dataApi } = React.useContext(ApiContext);
  console.log("markers", dataApi.rows);
  const mapPositions = [41.2925, 12.5736];

  return (
    <section>
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
        row.places.map((places, i) => {
          return (
            <Marker
              key={i}
              position={[places.position.coords[0], places.position.coords[1]]}
            >
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          );
        })
      )}
    </MapContainer>


    <h2>{dataApi.title}</h2>
    <p>{dataApi.days} Giorni</p>
    </section>
    
    
  );
};

export default CardMaps;
