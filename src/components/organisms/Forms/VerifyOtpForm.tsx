import  { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../../atoms/Button/Button";
import LabeledInput from "../../atoms/LabeledInput/LabeledInput";
import { useAuth } from "../../../context/AuthContext";

const VerifyOtpForm = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isResending, setIsResending] = useState(false);
  const [canResend, setCanResend] = useState(false);

  const email = localStorage.getItem("email");

  useEffect(() => {
    if (!email && !isAuthenticated) {
      toast.error("No email found for verification. Please try logging in again.");
      navigate("/login");
    }
  }, [email, isAuthenticated, navigate]);

  const handleResendOtp = async () => {
    if (!email) {
      toast.error("Cannot resend. Email not found.");
      return;
    }

    setIsResending(true);
    setError("");

    try {
      await axios.post("https://e-commerce-web-site-ten.vercel.app/api/v1/auth/resend-2FA", {
        email: email,
      });
      toast.success("New verification code sent to your email!");
    } catch (err: any) {
      console.error("Resend OTP error:", err.response?.data);
      toast.error(err.response?.data?.message || "Failed to resend code.");
    } finally {
      setIsResending(false);
    }
  };

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
        { email, OTP:parseInt(otp)}
      );

      const token = res.data.token;
      const userName = res.data.data.name;
      const userEmail = res.data.data.email;

      if (token && userName && userEmail) {
        login(token, userName, userEmail);
        toast.success("Verification successful. You are now logged in!");
        navigate("/");
      } else {
        setError("Verification failed: Missing token or user data in response.");
      }
    } catch (err: any) {
      console.error("OTP verification error:", err.response?.data);
      setError(err.response?.data?.message || "CODE verification failed.");
      setCanResend(true);
    } finally {
      setLoading(false);
    }
  };

  if (!email && !isAuthenticated) return null;

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form className="space-y-4 max-w-md w-full mx-auto px-4 sm:px-6" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-center">Verify OTP</h1>
        <p className="text-center text-gray-600">
          A verification step is required for {email}. Enter the code if sent, or proceed.
        </p>

        <LabeledInput
          label="OTP Code"
          placeholder="Enter code"
          name="otp"
          value={otp}
          onChange={(e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) { 
      setOtp(value);
    }
  }}
          type="text"
          maxLength={6}
        />

        {error && <p className="text-red-500 text-center">{error}</p>}

        <Button text={loading ? "Verifying..." : "Verify Code"} type="submit" disabled={loading} />

        <div className="text-center text-sm mt-4">
  <button
    type="button"
    onClick={handleResendOtp}
    disabled={!canResend || isResending}
    className={`text-blue-500 hover:underline ${
      (!canResend || isResending) ? 'opacity-50 cursor-not-allowed' : ''
    }`}
  >
    {isResending ? "Sending..." : "Resend Code"}
  </button>
</div>

      </form>
    </div>
  );
};

export default VerifyOtpForm;
