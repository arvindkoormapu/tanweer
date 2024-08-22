import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "./pages/loading";
import Landing from "./pages/Landing";

import MainLayout from "./components/Layout/MainLayout";
import SimpleLayout from "./components/Layout/SimpleLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import ViewProgram from "./pages/ViewProgram";
import Programs from "./pages/Program";
import StyleAndActivities from "./pages/StyleAndActivities";
import FestivalPass from "./pages/FestivalPass";
import Contact from "./pages/Contact";
import PrivacyTerms from "./pages/PrivacyTerms";
import Partners from "./pages/Partners";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/landing"
          element={
            <MainLayout>
              <Landing />
            </MainLayout>
          }
        />
        <Route
          path="/home"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/view-program"
          element={
            <MainLayout>
              <ViewProgram />
            </MainLayout>
          }
        />
        <Route
          path="/programs"
          element={
            <MainLayout>
              <Programs />
            </MainLayout>
          }
        />

        <Route
          path="/stay_activities"
          element={
            <MainLayout>
              <StyleAndActivities />
            </MainLayout>
          }
        />

        <Route
          path="/festival_passes"
          element={
            <MainLayout>
              <FestivalPass />
            </MainLayout>
          }
        />

        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />

        <Route
          path="/terms_privacy"
          element={
            <MainLayout>
              <PrivacyTerms />
            </MainLayout>
          }
        />

        <Route
          path="/partners"
          element={
            <MainLayout>
              <Partners />
            </MainLayout>
          }
        />

        <Route
          path="/"
          element={
            <SimpleLayout>
              <Loading />
            </SimpleLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
