import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Servey from "./pages/Servey"; 

import Contact_us from "./pages/Contact_us";

import Team from "./pages/Team";
import Aboutus from "./pages/Aboutus";

import AlMl from "./components/seveyExtra/AlMl";
import DataEng from "./components/seveyExtra/DataEng";
import BI from "./components/seveyExtra/BI";
import ARVR from "./components/seveyExtra/ARVR";
import GameStudio from "./components/seveyExtra/GameStudio";
import QA from "./components/seveyExtra/QA";
import LMS from "./components/seveyExtra/LMS";
import WebMobile from "./components/seveyExtra/WebMobile";
import Ecommerce from "./components/seveyExtra/Ecommerce";
import Adobe from "./components/seveyExtra/Adobe";
import SharePoint from "./components/seveyExtra/SharePoint";
import Enterprise from "./components/seveyExtra/Enterprise";
import FieldForce from "./components/seveyExtra/FieldForce";
import Banking from "./components/seveyExtra/Banking";
import Cloud from "./components/seveyExtra/Cloud";
import Cyber from "./components/seveyExtra/Cyber";
import ERP from "./components/seveyExtra/ERP";
import Backup from "./components/seveyExtra/Backup";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servey" element={<Servey />} />
          <Route path="/contact_us" element={<Contact_us />} />
          <Route path="/team" element={<Team />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/ml-ai-development" element={<AlMl />} />
          <Route path="/data-engineering" element={<DataEng />} />
          <Route path="/business-intelligence" element={<BI />} />
          <Route path="/ar-vr-solutions" element={<ARVR />} />
          <Route path="/game-studio" element={<GameStudio />} />
          <Route path="/qa-testing" element={<QA />} />
          <Route path="/lms-development" element={<LMS />} />
          <Route path="/web-mobile-apps" element={<WebMobile />} />
          <Route path="/ecommerce-development" element={<Ecommerce />} />
          <Route path="/adobe-experience-manager" element={<Adobe />} />
          <Route path="/sharepoint-services" element={<SharePoint />} />
          <Route path="/enterprise-focused" element={<Enterprise />} />
          <Route path="/field-force-automation" element={<FieldForce />} />
          <Route path="/banking-solutions" element={<Banking />} />
          <Route path="/cloud-solutions" element={<Cloud />} />
          <Route path="/cyber-security" element={<Cyber />} />
          <Route path="/erp-development" element={<ERP />} />
          <Route path="/backup-solutions" element={<Backup />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
