import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Components/Users/JobsHome";
import JobsLists from "./Components/Users/JobsLists";
import JobsApply from "./Components/Users/JobsApply";
import JobDescription from "./Components/Users/JobDescription";
import JobsMy from "./Components/Users/MyJobs";

import CompanyHome from "./Components/Users/CompanyHome";
import CompanyPage from "./Components/Users/CompanyPage";

import Messages from "./Components/Users/Messages";

import Profile from "./Components/Users/Profile";
import ProfilePlans from "./Components/Users/ProfilePlans";

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
            <Route path=":jobId" element={<JobDescription />} />
          </Route>
          <Route path="company">
            <Route path="" element={<CompanyHome />} />
            <Route path=":companyId" element={<CompanyPage />} />
          </Route>
          <Route path="myjobs">
            <Route path="" element={<JobsMy />} />
          </Route>
          <Route path="messages">
            <Route path="" element={<Messages />} />
          </Route>
          <Route path="profile">
            <Route path="" element={<Profile />} />
            <Route path="plans" element={<ProfilePlans />} />
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
