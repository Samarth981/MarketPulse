import React, { createContext, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('accessToken', userData.accessToken);
    navigate('/dashboard');
  };

  const handleLogout = useCallback(async () => {
    localStorage.removeItem('accessToken');
    setUser(null);
    setLoading(true);

    try {
      await axiosInstance.post('/auth/logout', {});
    } catch (error) {
      console.error('Logout failed:', error);
    }

    setLoading(false);
    navigate('/login', { replace: true });
  }, [navigate]);

  const verifyToken = useCallback(async () => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      setUser(null);
      setLoading(false);
      if (window.location.pathname !== '/Signup') {
        navigate('/login', { replace: true });
      }
      return;
    }

    try {
      const response = await axiosInstance.post(
        '/refresh-token',
        {},
        { withCredentials: true },
      );

      if (response.data.accessToken) {
        setUser((prevUser) => ({
          ...prevUser,
          accessToken: response.data.accessToken,
        }));

        axiosInstance.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.data.accessToken}`;
        localStorage.setItem('accessToken', response.data.accessToken);
      }
    } catch (error) {
      console.error('Token validation failed:', error);
      setUser(null);
      localStorage.removeItem('accessToken');
      navigate('/login', { replace: true });
    }
    setLoading(false);
  }, [navigate]);

  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  if (loading) return <p>Loading...</p>;

  return (
    <AuthContext.Provider
      value={{ user, login: handleLogin, logout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
