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

        <span>TOTALE - </span>
        <span>{dataApi.priceTotal.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</span>

        
      </AccordionInfo>
    </div>
  );
};

export default AccordionTariffe;
