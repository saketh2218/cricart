import { createContext, useContext, useState, useEffect } from 'react';
import { apiLogin, apiRegister } from '../services/api';

const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState(() => {
    const localUser = localStorage.getItem('criccart_user');
    return localUser ? JSON.parse(localUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('criccart_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('criccart_user');
    }
  }, [user]);

  const loginUser = async (email, password) => {
    try {
      const data = await apiLogin(email, password);
      setUser(data.user);
      localStorage.setItem('criccart_token', data.token);
      return { success: true };
    } catch (error) {
      if (error.message && (error.message.includes('Failed to fetch') || error.message.includes('NetworkError') || error.message.includes('Network response was not ok') || error.message.includes('Load failed'))) {
        const demoUser = {
          id: Date.now(),
          name: email.split('@')[0],
          email: email
        };
        setUser(demoUser);
        localStorage.setItem('criccart_token', 'demo_jwt_token_123');
        return { success: true, isDemo: true };
      }
      return { success: false, error: error.message || 'Invalid email or password' };
    }
  };

  const registerUser = async (name, email, password) => {
    try {
      const data = await apiRegister(name, email, password);
      setUser(data.user);
      localStorage.setItem('criccart_token', data.token);
      return { success: true };
    } catch (error) {
      if (error.message && (error.message.includes('Failed to fetch') || error.message.includes('NetworkError') || error.message.includes('Network response was not ok') || error.message.includes('Load failed'))) {
        const demoUser = {
          id: Date.now(),
          name: name,
          email: email
        };
        setUser(demoUser);
        localStorage.setItem('criccart_token', 'demo_jwt_token_123');
        return { success: true, isDemo: true };
      }
      return { success: false, error: error.message || 'Registration failed' };
    }
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('criccart_token');
    localStorage.removeItem('criccart_user');
  };

  return (
    <UserContext.Provider value={{ user, loginUser, registerUser, logoutUser, isAuthenticated: !!user }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};