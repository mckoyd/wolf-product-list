import { GlobalStyles } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { globalStyles } from "../styles/global.styles";
import Landing from "./Landing";

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
