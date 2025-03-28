import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Home from "./pages/Home";
import Event from "./pages/Event/event";

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
        <Route
          path="/event/:id"
          element={
            <MainLayout>
              <Event />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
};

const PageTracker = () => {
  useGtm();
  return null;
};

export default App;
