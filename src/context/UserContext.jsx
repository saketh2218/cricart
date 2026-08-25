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
      return true;
    } catch (error) {
      alert(error.message || 'Login failed');
      return false;
    }
  };

  const registerUser = async (name, email, password) => {
    try {
      const data = await apiRegister(name, email, password);
      setUser(data.user);
      localStorage.setItem('criccart_token', data.token);
      return true;
    } catch (error) {
      alert(error.message || 'Registration failed');
      return false;
    }
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('criccart_token');
  };

  return (
    <UserContext.Provider value={{ user, loginUser, registerUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};