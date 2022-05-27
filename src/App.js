import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Contact,
  FuckedUp,
  Services,
  CompanyHistory,
  Location,
} from "./pages";
import DataGet from "./components/Data";


function App() {
  return (
    <>
    <DataGet />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="services" element={<Services />} />
          <Route path="history" element={<CompanyHistory />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<FuckedUp />} />
      </Routes>
      
    </>
  );
}

export default App;
