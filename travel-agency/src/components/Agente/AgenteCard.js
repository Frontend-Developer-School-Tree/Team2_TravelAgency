import React from "react";
import {ApiContext} from "../../ApiContext";

const AgenteCard = () => {
  const dataApi = React.useContext(ApiContext);

  return ( 
    <div className="info">
      {/* <img src={dataApi.operator.image}/> */}
      <>
        <h2>{dataApi.operator.name}</h2>
        <h3>descrizione</h3>
        <p>{dataApi.operator.contact.phone}</p>
        <p>{dataApi.operator.contact.email}</p>
        <p>{dataApi.operator.contact.address}</p>
        
      </>
      {/* {value => (
          <div style={{backgroundColor: "green"}}>{value.operator.name}</div>
        )} */}
    </div>
  );
};

export default AgenteCard
