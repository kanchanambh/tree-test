import { useState } from 'react';
import axios from 'axios';
import { ICareer } from '../interfaces';

export const useGetCareers = () => {
  const [careers, setCareers] = useState<ICareer[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getCareers = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get('http://localhost:3000/api/v1/careers/');
      setCareers(response.data.careers);
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  return { getCareers, careers, isLoading, error };
};
