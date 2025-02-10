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
        <a href="/2024/#/">View 2024 Archive</a>
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
