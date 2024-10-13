import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Wundt }  from "./Components/Wundt";
import { Timeline } from "./Components/Timeline";
import { James } from "./Components/James";

function App() {
  return (
    
      <Router>
          <Routes>        
              <Route exact path="/Wundt" element={<Wundt />} />
              <Route exact path="/James" element={<James />} />
              <Route exact path="/*" element={<Timeline />} />
          </Routes>
      </Router>
  
)};

export default App;
