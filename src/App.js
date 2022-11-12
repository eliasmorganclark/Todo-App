import "./App.css";
import React from "react";

import { Theme } from "@twilio-paste/core/theme";
import TopHeader from "./components/TopHeader.js";

import {Outlet} from "react-router-dom";




function App() {
  return (
    <Theme.Provider theme="default">
      <TopHeader />
      <Outlet />
    </Theme.Provider>
  );
}

export default App;
