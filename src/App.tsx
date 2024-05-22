import React from "react";
import Dashboard from "./Dashboard";
import { JobData } from "./types";
import data from "./data.json";

const App: React.FC = () => {
  return (
    <div className="App">
      <Dashboard data={data as JobData[]} />
    </div>
  );
};

export default App;