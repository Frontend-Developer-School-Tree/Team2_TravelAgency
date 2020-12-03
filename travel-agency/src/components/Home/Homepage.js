import React from "react";
// import AccordionList from "../components/Accordion/AccordionList/AccordionList";
// import AgenteCard from "../components/Agente/AgenteCard";
// import PhotoPrincipal from "../components/Navbar/Header";
import Header from "../Navbar/Header";
import { Routes, Route } from "react-router-dom";
import CardMaps from "../Maps/CardMaps";
import AccordionList from "../Accordion/AccordionList/AccordionList";

const Homepage = () => {
  return (
    <section>
      <Header />
      <Routes>
        <Route path="maps" element={<CardMaps />} />
        <Route path="infotour" element={<AccordionList />} />
      </Routes>
    </section>
  );
};

export default Homepage;
