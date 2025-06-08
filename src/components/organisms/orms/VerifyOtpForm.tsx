// src/components/forms/VerifyOtpForm.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../../atoms/Button/Button";
import LabeledInput from "../../atoms/LabeledInput/LabeledInput";
import { useAuth } from "../../../context/AuthContext"; // استورد useAuth هنا

const VerifyOtpForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // استخدم دالة login من AuthContext هنا
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const email = localStorage.getItem("email");
  // ملاحظة: لا نعتمد على 'tempToken' في هذا الـ useEffect لتجنب التحويل غير المرغوب فيه
  // إذا كان الـ backend لا يرسله في استجابة /login الأولية.

  useEffect(() => {
    // إذا لم يتم العثور على بريد إلكتروني، قم بتحويل المستخدم إلى صفحة تسجيل الدخول.
    // هذا يمنع الوصول المباشر لهذه الصفحة دون محاولة تسجيل دخول سابقة.
    if (!email) {
      console.log("Email is null or undefined, redirecting to /login.");
      toast.error("No email found for verification. Please try logging in again.");
      navigate("/login");
    }
  }, [email, navigate]); // يعتمد فقط على 'email' و 'navigate'

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
          OTP: otp, // تأكد أن هذا يطابق الحقل المتوقع لـ OTP في الـ backend الخاص بك
        }
        // بناءً على لقطات شاشة Postman الخاصة بك، لا يتطلب هذا المسار
        // Authorization header يحتوي على tempToken.
      );

      console.log("Verify OTP response:", res.data);

      // استخرج الـ token واسم المستخدم من استجابة /verify-2FA
      // بناءً على لقطة شاشة Postman، الاسم موجود تحت 'data.name'
      const token = res.data.token;
      const userName = res.data.data.name; // تأكد من المسار الصحيح للاسم هنا

      if (token && userName) {
        login(token, userName); // قم بتسجيل الدخول الفعلي باستخدام AuthContext
        localStorage.removeItem("email"); // امسح البريد الإلكتروني المؤقت بعد تسجيل الدخول
        // localStorage.removeItem("tempToken"); // لا حاجة للمسح إذا لم نقم بتخزينه بشكل ثابت

        toast.success("Verification successful. You are now logged in!");
        navigate("/"); // حول المستخدم إلى الصفحة الرئيسية
      } else {
        setError("Verification failed: Missing token or user data in response.");
      }
    } catch (err: any) {
      console.error("OTP verification error:", err.response?.data);
      setError(err.response?.data?.message || "OTP verification failed.");
    } finally {
      setLoading(false);
    }
  };

  // إذا لم يكن هناك بريد إلكتروني، لا تعرض أي شيء أو أظهر مؤشر تحميل أثناء التحويل
  if (!email) {
    return null;
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