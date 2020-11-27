import React from "react";
import {ApiContext} from "../../ApiContext";

const AgenteCard = () => {
  
  const dataApi = React.useContext(ApiContext);

  return ( 
    <div>
      <h2>{dataApi.operator.name}</h2>
      {/* {value => (
          <div style={{backgroundColor: "green"}}>{value.operator.name}</div>
        )} */}
    </div>
  );
};

export default AgenteCard
