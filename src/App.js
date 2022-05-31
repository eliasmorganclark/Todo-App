import "./App.css";
import React from "react";
import DataGet from "./components/Data";
import { Theme } from "@twilio-paste/core/theme";
import TopHeader from "./components/TopHeader.js";

function App() {
  return (
    <Theme.Provider theme="default">
      <TopHeader />
      <DataGet />
    </Theme.Provider>
  );
}

export default App;
