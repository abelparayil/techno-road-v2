import React from "react";
import { Route, Routes } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          {/* <Route index element={}/> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
