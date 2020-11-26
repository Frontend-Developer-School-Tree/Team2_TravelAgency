import React from "react";
import { ApiContext } from "../../ApiContext";

const AgenteCard = () => {
  const { data } = React.useContext(ApiContext);
  console.log(data.results);

  return (
    <div>
      {/* <h2>{data.results.data.operator.name}</h2> */}
    </div>
  );
};

export default AgenteCard;
