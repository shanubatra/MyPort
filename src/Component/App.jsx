import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Courses from "./Courses";
import Projects from "./Projects";
import Error from "./Error";
import ContactUs from "./ContactUs";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/portfolio" element={<About />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
