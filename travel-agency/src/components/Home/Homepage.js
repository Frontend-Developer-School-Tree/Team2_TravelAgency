import React from "react";
import Header from "../Navbar/Header";
import { Routes, Route } from "react-router-dom";
import CardMaps from "../Maps/CardMaps";
import AccordionList from "../Accordion/AccordionList/AccordionList";
import CardList from "../CardTest/CardList";

const Homepage = () => {
  return (
    <section>
      <Header />
      <Routes>
        <Route path="mappa" element={<CardMaps />} />
        <Route path="miotour" element={<CardList/>} />
        <Route path="infotour" element={<AccordionList />} />
      </Routes>
    </section>
  );
};

export default Homepage;
