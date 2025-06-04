import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // ✅ import useNavigate
import { Button } from "../../atoms/Button/Button";
import LabeledPasswordInput from "../../atoms/Input/LabeledPasswordInput";
import LabeledInput from "../../atoms/LabeledInput/LabeledInput";
import CheckboxWithLabel from "../../molecules/CheckboxWithLabel";
import { toast } from "react-toastify";

const SignupForm = () => {
  const navigate = useNavigate(); // ✅ initialize navigate
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirmation: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const signup = async (formData: {
    name: string;
    email: string;
    phone: string;
    password: string;
    passwordConfirmation: string;
  }) => {
    setLoading(true);
    setMessage("");
    setErrors({});

    try {
    await axios.post(
  "https://e-commerce-web-site-ten.vercel.app/api/v1/auth/signUp",
  formData
);

      setMessage("Signup successful!");
      return true;
    } catch (error: any) {
      const apiErrors = error.response?.data?.errors;

      if (apiErrors && Array.isArray(apiErrors)) {
        const formattedErrors: Record<string, string> = {};
        apiErrors.forEach((err: any) => {
          if (err.param) {
            formattedErrors[err.param] = err.msg;
          }
        });
        setErrors(formattedErrors);
      } else {
        setMessage(error.response?.data?.message || "Signup failed.");
      }

      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toastOptions = {
    toastClassName:
      "bg-emerald-400 text-white font-semibold rounded shadow-md",
    bodyClassName: "text-white",
    progressClassName: "bg-white",
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!agreed) {
    toast.error("You must agree to the Terms & Privacy", toastOptions);
    return;
  }

  const success = await signup(form);
  if (success) {
    toast.success("Signup successful!", toastOptions);

    // ✅ login user immediately
    try {
      const res = await axios.post("https://e-commerce-web-site-ten.vercel.app/api/v1/auth/login", {
        email: form.email,
        password: form.password,
      });

      // Store token/user info (depends on what your backend returns)
      localStorage.setItem("token", res.data.token); // example
      // Redirect to home or dashboard
      navigate("/"); // or "/dashboard"
    } catch (err: any) {
      toast.error("Signup succeeded but auto-login failed", toastOptions);
      navigate("/login"); // fallback
    }

  } else {
    toast.error("Signup failed. Please try again.", toastOptions);
  }
};


  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md w-full mx-auto px-4 sm:px-6"
    >
      <LabeledInput
        label="Name"
        name="name"
        placeholder="Enter your name"
        value={form.name}
        onChange={handleChange}
        error={errors.name}
      />

      <LabeledInput
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={form.email}
        onChange={handleChange}
        error={errors.email}
      />
      <LabeledInput
        label="Phone"
        name="phone"
        type="tel"
        placeholder="Enter your phone number"
        value={form.phone}
        onChange={handleChange}
        error={errors.phone}
      />

      <LabeledPasswordInput
        label="Password"
        name="password"
        placeholder="Enter your password"
        value={form.password}
        onChange={handleChange}
        error={errors.password}
      />
      <LabeledPasswordInput
        label="Confirm Password"
        name="passwordConfirmation"
        placeholder="Confirm your password"
        value={form.passwordConfirmation}
        onChange={handleChange}
        error={errors.passwordConfirmation}
      />

      <div className="text-sm mt-4">
        <CheckboxWithLabel
          label={
            <>
              I agree to the{" "}
              <span className="text-blue-500 cursor-pointer">
                Terms & Privacy
              </span>
            </>
          }
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
      </div>

      <div className="text-center">
        <Button
          text={loading ? "Signing Up..." : "Sign Up"}
          disabled={loading}
          type="submit"
        />
      </div>

      {message && (
        <p
          className={`text-center text-sm mt-2 ${
            message.includes("successful") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}

      <p className="text-center text-sm text-gray-500 mt-2">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:underline">
          Log in
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
