// src/hooks/useSignup.ts
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  password: string;
};

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = (form: FormData) => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(form.email)) newErrors.email = "Email is invalid";
    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const signup = async (form: FormData) => {
    if (!validate(form)) return false;

    setLoading(true);
    setMessage("");
    try {
      const response = await fetch(
        "https://e-commerce-web-site-ten.vercel.app/v1/auth/signUp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("Signup successful! Please check your email.");
        setErrors({});
        return true;
      } else {
        setMessage(data.message || "Signup failed.");
        return false;
      }
    } catch {
      setMessage("An error occurred. Please try again later.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { loading, message, errors, signup };
};
