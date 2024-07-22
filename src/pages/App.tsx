import React from "react";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<div>Product List</div>} />
      </Routes>
    </div>
  );
};

export default App;
