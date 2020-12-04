import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./CardMapsStyled.css";
import { ApiContext } from "../../ApiContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";




const CardMaps = () => {
  
  const { dataApi } = React.useContext(ApiContext);
  

  const mapPositions = [41.2925, 12.5736];
  const arrow = <FontAwesomeIcon icon={faArrowRight} style={{color:"orange"}} />;
  const resultAdult = dataApi.partecipants.filter((elem) => {
    if (elem.type === "adulto") return true;
  });

  const resultAdole = dataApi.partecipants.filter((elem) => {
    if (elem.type === "adolescenti") return true;
  });



  return (
    <div className="mapCard">
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
                  position={[
                    places.position.coords[0],
                    places.position.coords[1],
                  ]}
                >
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              );
            })
          )}
        </MapContainer>

        <h2  className="TitoloMaps">{dataApi.title}</h2>
        
          <p> {arrow} Dal {dataApi.dateFrom} al {dataApi.dateTo}
        </p>
        <p>{arrow} {resultAdole.length} adolescenti / {arrow} {resultAdult.length} adulti</p>
        <p>{arrow} {dataApi.days} Giorni / {dataApi.days - 1} Notti</p>
      </section>
    </div>
  );
};

export default CardMaps;
