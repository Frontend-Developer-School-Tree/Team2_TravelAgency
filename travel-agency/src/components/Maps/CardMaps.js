import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./CardMapsStyled.css";
import { ApiContext } from "../../ApiContext";

const CardMaps = () => {
  const { dataApi } = React.useContext(ApiContext);

  const mapPositions = [41.2925, 12.5736];

  return (
    <div className="mapCard">

      <section >
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
    </div>
    
    
  );
};

export default CardMaps;
