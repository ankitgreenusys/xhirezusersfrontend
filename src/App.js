import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Components/Users/JobsHome";
import JobsLists from "./Components/Users/JobsLists";
import JobsApply from "./Components/Users/JobsApply";

import CompanyHome from "./Components/Users/CompanyHome";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users">
          <Route path="jobs">
            <Route path="" element={<Home />} />
            <Route path="list" element={<JobsLists />} />
            <Route path=":jobId/apply" element={<JobsApply />} />
          </Route>
          <Route path="company">
            <Route path="" element={<CompanyHome />} />
          </Route>
        </Route>
        <Route path="/services" element={<h1>Services</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
