import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const email = localStorage.getItem("email");
  if (!email) {
    toast.error("Session expired. Please log in again.");
    navigate("/login");
    return;
  }

  try {
    const res = await axios.post(
      "https://e-commerce-web-site-ten.vercel.app/api/v1/auth/verify-otp",
      { email, OTP: otp }
    );
    localStorage.setItem("token", res.data.token);
    localStorage.removeItem("tempToken");
    localStorage.removeItem("email");
    toast.success("OTP verified. You are now logged in.");
    navigate("/");
  } catch (err: any) {
    setError(err.response?.data?.message || "OTP verification failed");
  }
};


  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8">
      <h2 className="text-xl mb-6 font-semibold text-center">Enter Code</h2>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter Code"
        className="border bg-transparent border-gray-300 rounded-[12px] mt-3 px-4 py-2 w-full"
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <button
        type="submit"
        className="w-full justify-center mt-6 bg-emerald-400 py-2 text-white transition hover:bg-emerald-500 rounded-[16px]"
      >
        Verify
      </button>
      <p className="text-center text-sm text-gray-500 mt-4">
        Didn't receive the code?{" "}
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="text-blue-500 hover:underline"
        >
          Resend
        </button>
      </p>
    </form>
  );
};

export default VerifyOTP;
