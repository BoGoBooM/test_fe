import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from './pages/LoginPage';
import ItemsPage from './pages/ItemsPage';

function App() {
  const isLoggedIn = useSelector((state) => state.user?.isLoggedIn || false);

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          <Route
            path="/login"
            element={!isLoggedIn ? <LoginPage /> : <Navigate to="/items" />}
          />
          <Route
            path="/items"
            element={isLoggedIn ? <ItemsPage /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
