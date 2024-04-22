import { useState } from 'react';
import axios from 'axios';
import { IApplication } from '../interfaces';

export const useCreateApplication = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [createdApplication, setCreatedApplication] = useState<IApplication | null>(null);

  const createApplication = async (careerListingId: string, applicationData: any) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `http://localhost:3000/api/v1/careers/${careerListingId}/applications/create`,
        applicationData,
        { withCredentials: true }
      );
      setCreatedApplication(response.data);
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { createApplication, createdApplication, isLoading, error };
};
