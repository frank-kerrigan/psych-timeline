import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Document1 }  from "./Components/Document1";
import { Timeline } from "./Components/Timeline";
import { Document2 } from "./Components/Document2";

function App() {
  return (
    
      <Router>
          <Routes>        
              <Route exact path="/Document1" element={<Document1 />} />
              <Route exact path="/Document2" element={<Document2 />} />
              <Route exact path="/*" element={<Timeline />} />
          </Routes>
      </Router>
  
)};

export default App;
