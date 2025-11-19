import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';

import Orders from './components/transaction/Orders';
import Holdings from './components/transaction/Holdings';
import Positions from './components/transaction/Positions';
import Summary from './components/Summary';
import Funds from './components/Funds';
import Apps from './components/Apps';

import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public Routes (No Auth Needed) */}
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />

          {/* Protected Routes (Require Authentication) */}
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          >
            <Route index element={<Summary />} />
            <Route path="orders" element={<Orders />} />
            <Route path="holdings" element={<Holdings />} />
            <Route path="positions" element={<Positions />} />
            <Route path="funds" element={<Funds />} />
            <Route path="apps" element={<Apps />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
