import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AddBug from './pages/AddBug';
import EditBug from './pages/EditBug';
import BugDetailsPage from './pages/BugDetailsPage';
import logo from './assest/logo.avif';
const App = () => {
  return (
    <div className="app-container">

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src={logo} alt="Logo" style={{ height: '40px'}} />
        <h1>Bug Tracker</h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-bug" element={<AddBug />} />
        <Route path="/edit-bug/:id" element={<EditBug />} />
        <Route path="/bug/:id" element={<BugDetailsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
