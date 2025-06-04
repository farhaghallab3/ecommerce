// src/hooks/useSignup.ts
import { useState } from 'react';
import axios from 'axios';

export type FormData = {
  name: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirmation: string;
};

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const signup = async (form: FormData): Promise<boolean> => {
    setLoading(true);
    setMessage('');
    setErrors({});

    try {
      const res = await axios.post('https://e-commerce-web-site-ten.vercel.app/api/v1/auth/signUp', form);

      if (res.data) {
        setMessage('Signup successful!');
        return true;
      }
    } catch (err: any) {
      if (err.response?.data?.errors) {
        // If backend sends validation errors
        const apiErrors: Record<string, string> = {};
        err.response.data.errors.forEach((e: { field: string; message: string }) => {
          apiErrors[e.field] = e.message;
        });
        setErrors(apiErrors);
      } else {
        setMessage(err.response?.data?.message || 'Something went wrong');
      }
    } finally {
      setLoading(false);
    }

    return false;
  };

  return {
    signup,
    loading,
    message,
    errors,
  };
};
