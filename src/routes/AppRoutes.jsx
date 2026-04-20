import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Director from "../pages/Director";
import Admission from "../pages/Admission";
import Enquiry from "../pages/Enquiry";
import Events from "../pages/Events";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import Result from "../pages/Results"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/director" element={<Director />} />
      <Route path="/admission" element={<Admission />} />
      <Route path="/result" element= {<Result />} />
      <Route path="/enquiry" element={<Enquiry />} />
      <Route path="/events" element={<Events />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
  );
}