import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./component/News";
import Weather from "./component/Weather";
import Dashboard from "./component/Dashboard";
import Nav from "./component/Nav";

function App() {
  return (
    <Router>
      {/* Navigation Component */}
      <Nav />

      {/* Application Routes */}
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Dashboard />} />

        {/* Individual Feature Routes */}
        
        <Route path="/weather" element={<Weather />} />
        <Route path="/news" element={<News />} />

        {/* Fallback Route for 404 */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
