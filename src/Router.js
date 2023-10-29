import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";
import DesktopPage from "./pages/DesktopPage";
import MvpPage from "./pages/MvpPage";
import LabPage from "./pages/LabPage";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/desktop" element={<DesktopPage />} />
        <Route path="/mvp" element={<MvpPage />} />
        <Route path="/lab" element={<LabPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
