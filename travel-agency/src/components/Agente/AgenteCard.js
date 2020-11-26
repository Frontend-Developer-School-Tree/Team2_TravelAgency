import React from "react";
import { ApiContext } from "../../ApiContext";
import { Nome } from "./AgenteCardStyles";

const AgenteCard = () => {
  const dataApi = React.useContext(ApiContext);
  console.log(dataApi);



  return (
    <div>
      {/* <Nome>
        <p>{dataApi.id}</p>
      </Nome> */}
    </div>
  );
};

export default AgenteCard;
