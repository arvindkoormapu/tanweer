import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Home from "./pages/Home";

import useGtm from "./hooks/useGtm";

import "./App.css";

const App = () => {
  return (
    <Router>
      <PageTracker />
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route path="/2024/*" element={<Archive2024 />} />
      </Routes>
    </Router>
  );
};

const PageTracker = () => {
  useGtm();
  return null;
};

function Archive2024() {
  window.location.href = "/2024/index.html"; // Redirect to the archived site
  return null;
}

export default App;
