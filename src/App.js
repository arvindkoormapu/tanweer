import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Loading from "./pages/loading";
import MainLayout from "./components/Layout/MainLayout";
import SimpleLayout from "./components/Layout/SimpleLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import ViewProgram from "./pages/ViewProgram";
import Programs from "./pages/Program";


import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
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
