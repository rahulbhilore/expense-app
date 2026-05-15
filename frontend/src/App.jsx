import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Home from "./pages/home.jsx";
import Navbar from "./layouts/navbar.jsx";

import "./App.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
    <ToastContainer/>
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<h1>Page Not Found</h1>}/>
        <Route path="home" element={<Home />}/>
        <Route path="navbar" element={<Navbar />}/>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
