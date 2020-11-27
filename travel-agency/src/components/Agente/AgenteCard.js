import React from "react";
import ApiContext from "../../ApiContext";

const AgenteCard = () => {

  return ( 
    <ApiContext.Consumer>
      {value => (
          <div style={{backgroundColor: "green"}}>{value.operator.name}</div>
        )}
    </ApiContext.Consumer>
  );
};

export default AgenteCard
