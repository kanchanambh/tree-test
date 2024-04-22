import { useState } from 'react';
import axios from 'axios';
import { IInquiry } from '../interfaces';

export const useCreateInquiry = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [createdInquiry, setCreatedInquiry] = useState<IInquiry | null>(null);

  const createInquiry = async (inquiryData: any) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(`http://localhost:3000/api/v1/customers/inquiries/create`, inquiryData, {
        withCredentials: true,
      });
      setCreatedInquiry(response.data);
      return { success: true };
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  return { createInquiry, createdInquiry, isLoading, error };
};
