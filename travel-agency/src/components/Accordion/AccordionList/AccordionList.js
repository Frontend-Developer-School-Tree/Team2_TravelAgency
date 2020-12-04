import React from "react";
import { ApiContext } from "../../../ApiContext";
import AccordionInfo from "../AccordionInfo/AccordionInfo";

const AccordionList = () => {
  const {dataApi} = React.useContext(ApiContext);

  return (
    <div className="accortionList">
      <AccordionInfo title={dataApi.documentsRequested.name}>
        <p>{dataApi.documentsRequested.description}</p>
      </AccordionInfo>
      
      <AccordionInfo title={dataApi.documentsRequested.name}>
        <p>{dataApi.documentsRequested.description}</p>
      </AccordionInfo>

      <AccordionInfo title={dataApi.documentsInsurance.name}>
        <p>{dataApi.documentsInsurance.description}</p>
      </AccordionInfo>

      <AccordionInfo title={dataApi.documentsCancellation.name}>
        <p>{dataApi.documentsCancellation.description}</p>
      </AccordionInfo>

      <AccordionInfo title={dataApi.documentsPayment.name}>
        <p>{dataApi.documentsPayment.description}</p>
      </AccordionInfo>

      <AccordionInfo title={dataApi.documentsCarRental.name}>
        <p>{dataApi.documentsCarRental.description}</p>
      </AccordionInfo>
    </div>
  );
};

export default AccordionList;
