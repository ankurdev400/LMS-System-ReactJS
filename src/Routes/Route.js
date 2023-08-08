import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/View/Login";
import Dashboard from "../Pages/Dasboard/View/Dashboard";
import Home from "../Pages/Home/View/Home";
import MyProfile from "../Pages/MyProfile/View/MyProfile";

import ApplyLeave from "../Pages/ApplyLeave/View/ApplyLeave";
import Grievances from "../Pages/Grievances/View/Grievances";

import Message from "../Pages/Message/View/Message";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="myprofile" element={<MyProfile />} />

          <Route path="messages" element={<Message />} />
          <Route path="applyleave" element={<ApplyLeave />} />
          <Route path="grievances" element={<Grievances />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
