// src/components/forms/VerifyOtpForm.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../../atoms/Button/Button";
import LabeledInput from "../../atoms/LabeledInput/LabeledInput";
import { useAuth } from "../../../context/AuthContext";

const VerifyOtpForm = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth(); // <<-- Get isAuthenticated here
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const email = localStorage.getItem("email");

  useEffect(() => {
    console.log("VerifyOtpForm loaded. Email from localStorage:", email, "isAuthenticated:", isAuthenticated);
    // Only redirect if email is missing AND user is NOT already authenticated
    if (!email && !isAuthenticated) { // <<-- CHANGED THIS LINE
      console.log("Email is null or undefined in VerifyOtpForm useEffect, and not authenticated, redirecting to /login.");
      console.trace("Redirect from VerifyOtpForm useEffect: Email missing and user not authenticated.");
      toast.error("No email found for verification. Please try logging in again.");
      navigate("/login");
    }
  }, [email, isAuthenticated, navigate]); // <<-- Add isAuthenticated to dependencies

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!email) {
      setError("Email not found. Please log in again.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        "https://e-commerce-web-site-ten.vercel.app/api/v1/auth/verify-2FA",
        {
          email: email,
          OTP: otp,
        }
      );

      console.log("Verify OTP response:", res.data);

      const token = res.data.token;
      const userName = res.data.data.name;

      if (token && userName) {
        login(token, userName);
        // localStorage.removeItem("email"); // <<-- MAKE SURE THIS LINE IS COMMENTED/REMOVED
        toast.success("Verification successful. You are now logged in!");
        console.log("Attempting to navigate to home page from VerifyOtpForm...");
        navigate("/");
        console.log("Navigation to home page initiated from VerifyOtpForm.");
      } else {
        setError("Verification failed: Missing token or user data in response.");
      }
    } catch (err: any) {
      console.error("OTP verification error:", err.response?.data);
      setError(err.response?.data?.message || "OTP verification failed.");
      console.trace("Redirect from VerifyOtpForm catch: OTP verification failed.");
    } finally {
      setLoading(false);
    }
  };

  if (!email && !isAuthenticated) { // <<-- Add isAuthenticated check here too for initial render
    return null; // Don't render if email is missing and not authenticated
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        className="space-y-4 max-w-md w-full mx-auto px-4 sm:px-6"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-center">Verify OTP</h1>
        <p className="text-center text-gray-600">
          A verification step is required for {email}. Enter the code if sent, or proceed.
        </p>

        <LabeledInput
          label="OTP Code"
          placeholder="Enter code"
          name="otp"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          type="text"
          maxLength={6}
        />

        {error && <p className="text-red-500 text-center">{error}</p>}

        <Button
          text={loading ? "Verifying..." : "Verify Code"}
          type="submit"
          disabled={loading}
        />
      </form>
    </div>
  );
};

export default VerifyOtpForm;