import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Servey from "./pages/Servey"; // or the correct path

import Project from "./pages/Project";
import Team from "./pages/Team";
import Aboutus from "./pages/Aboutus";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servey" element={<Servey />} />
          <Route path="/project" element={<Project />} />
          <Route path="/team" element={<Team />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </div>
    </Router>
  );
}
