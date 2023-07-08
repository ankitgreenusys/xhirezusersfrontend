import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import JobsLists from "./Components/JobsLists";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs">
          <Route path="" element={<Home />} />
          <Route path="list" element={<JobsLists />} />
          <Route path=":jobId/apply" element={<h1>Job Details</h1>} />
        </Route>
        <Route path="/services" element={<h1>Services</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
