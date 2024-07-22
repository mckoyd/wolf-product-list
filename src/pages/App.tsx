import React from "react";
import { GlobalStyles } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import Landing from "./Landing";

import { globalStyles } from "../styles/global.styles";

const App: React.FC = () => {
  return (
    <div className="app">
      <GlobalStyles styles={globalStyles} />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
};

export default App;
