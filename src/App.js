import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Loading from './pages/loading';
import Home from './pages/Home/Home';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/loading" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate replace to="/loading" />} />
      </Routes>
    </Router>
  );
};

export default App;
