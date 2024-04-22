import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthContext';

export const useLogin = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthContext not found');
  }

  console.log(import.meta.env.VITE_API_URL);

  const { setIsAuthenticated } = authContext;

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/accounts/login`,
        { username, password },
        { withCredentials: true }
      );

      setIsAuthenticated(true);

      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return { login };
};
