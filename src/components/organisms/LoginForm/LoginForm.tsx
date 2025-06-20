import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import { Button } from "../../atoms/Button/Button";
// Removed: import Divider from "../../atoms/Divider"; // Not in the image
import LabeledInput from "../../atoms/LabeledInput/LabeledInput";
import CheckboxWithLabel from "../../molecules/CheckboxWithLabel";
// Removed: import GoogleButton from "../../molecules/GoogleButton"; // Not in the image
// Assuming LabeledPasswordInput is used for password field with eye icon functionality
import LabeledPasswordInput from "../../atoms/Input/LabeledPasswordInput"; // Corrected path if needed

// Ensure useAuth is imported if you need to call login function
import { useAuth } from "../../../context/AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Destructure login from useAuth
  const [form, setForm] = useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false); // State for "Remember me" checkbox

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://e-commerce-web-site-ten.vercel.app/api/v1/auth/login",
        form
      );
      console.log("Login response:", res.data);

      // --- Standard login flow ---
      // If backend indicates 2FA is required, go to OTP verification.
      if (res.data.required2FA) {
        localStorage.setItem("tempToken", res.data.tempToken); // Assuming backend sends tempToken
        localStorage.setItem("email", form.email); // Save email for OTP
        toast.info("Code sent to your email. Please verify.");
        navigate("/verify-otp");
      } else {
        // Direct login if 2FA is not required
        const userName = res.data.user?.name || res.data.data?.name || "User";
        const userEmail = res.data.user?.email || res.data.data?.email || form.email;
        
        // Call the login function from AuthContext to set global state and localStorage
        login(res.data.token, userName, userEmail); // Use the login function

        toast.success("Logged in successfully!");
        navigate("/"); // Redirect to home page
      }
    } catch (err: any) {
      console.error("Login error:", err.response?.data);
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    // Outer container for centering, background, and the green border effect
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8 mt-10">
      {/* Form container with white background, rounded corners, and shadow */}
      <form
        onSubmit={handleSubmit}
        className="relative max-w-md w-full bg-white p-8 rounded-2xl shadow-lg space-y-6 overflow-hidden
                    " // Base border for pseudo-element effect
        style={{
          // Custom style for the green border effect as seen in the image
          boxShadow: '0 0 0 #00B207, 0 8px 16px rgba(0,0,0,0.2)' // Inner shadow + outer green glow
        }}
      >
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Sign In</h1> {/* Title */}

        {/* Removed GoogleButton and Divider based on image */}

        <LabeledInput
          label="Email" // Retaining label for clarity/accessibility, can hide with CSS if purely placeholder based
          placeholder="Email" // Placeholder is now the "label" in design
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        {/* Using LabeledPasswordInput for password with eye icon functionality */}
        <LabeledPasswordInput
          label="Password" // Retaining label
          type="password"
          placeholder="Password" // Placeholder is now the "label" in design
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <div className="flex items-center justify-between text-sm">
          <CheckboxWithLabel
            label="Remember me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <Link to="/forgot-password" className="text-blue-500 hover:underline">
            Forgot Password
          </Link>
        </div>

        <Button
          text="Login" // Changed text to "Login"
          type="submit"
          disabled={false} // Adjust disabled state based on form validation/loading
          className="w-full rounded-full py-3  hover:bg-emerald-600 text-white font-bold text-lg" // Green button, full width, rounded full
        />

        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Register
          </Link> {/* Changed "Sign up" to "Register" */}
        </p>
      </form>
    </div>
  );
};

export default LoginForm;