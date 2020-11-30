import React from "react";
import {ApiContext} from "../../ApiContext";

const AgenteCard = () => {
  
  const dataApi = React.useContext(ApiContext);

  return ( 
    <div className="info">
      {/* <img src={dataApi.operator.image}/> */}
      <>
        <h2>{dataApi.operator.name}</h2>
        <h3>descriz</h3>
        <p>{dataApi.operator.phone}</p>
        <i>{dataApi.operator.email}</i>
        <i>{dataApi.operator.address}</i>
        
      </>
      {/* {value => (
          <div style={{backgroundColor: "green"}}>{value.operator.name}</div>
        )} */}
    </div>
  );
};

export default AgenteCard
