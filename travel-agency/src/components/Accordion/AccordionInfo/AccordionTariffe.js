import React from "react";
import { ApiContext } from "../../../ApiContext";
import AccordionInfo from "./AccordionInfo";

const AccordionTariffe = () => {
  const { dataApi } = React.useContext(ApiContext);

  return (
    <div>
      <AccordionInfo title={"Tariffe"}>
        {dataApi.partecipants.map((persone, i) => (
          <div className="personeTariffe">
            <p key={i}>{persone.type} - {persone.price}</p>
          </div>
        ))}
        <hr/>
        <span>TOTALE - </span>
        <span>{(dataApi.priceTotal / 100)} €</span>
        <h2>COSA COMPRENDE IL PREZZO</h2>
        <p>{dataApi.included}</p>
        <h2>COSA NON COMPRENDE IL PREZZO</h2>
        <p>{dataApi.notIncluded}</p>
      </AccordionInfo>
    </div>
  );
};

export default AccordionTariffe;
