import "./App.css";
import React from "react";
import DataGet from "./components/Data";
import { Theme } from "@twilio-paste/core/theme";
import TopHeader from "./components/TopHeader.js";
import NewTask from "./components/NewTask";

function App() {
  return (
    <Theme.Provider theme="default">
      <TopHeader />
      <DataGet />
      <NewTask />
    </Theme.Provider>
  );
}

export default App;
