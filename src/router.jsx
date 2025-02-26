import "../src/styles/GlobalStyle.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LangingPage";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Project from "./pages/projects/Projects";




function AppRouter() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default AppRouter