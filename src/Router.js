import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";
import DesktopPage from "./pages/DesktopPage";
import MvpPage from "./pages/MvpPage";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/desktop" element={<DesktopPage />} />
        <Route path="/mvp" element={<MvpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
