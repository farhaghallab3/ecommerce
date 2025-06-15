// signup:
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../atoms/Button/Button";
import LabeledPasswordInput from "../../atoms/Input/LabeledPasswordInput";
import LabeledInput from "../../atoms/LabeledInput/LabeledInput";
import CheckboxWithLabel from "../../molecules/CheckboxWithLabel";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/AuthContext";

const SignupForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
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
  const [errors, setErrors] = useState<Record<string, string>>({}); // State to hold validation errors

  // Helper function for client-side validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    // Name validation
    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    } else if (form.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
      isValid = false;
    }

    // Email validation
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      // Basic email regex
      newErrors.email = "Invalid email format.";
      isValid = false;
    }

    // Phone validation
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!/^[0-9]{11}$/.test(form.phone)) {
      // Exactly 11 digits
      newErrors.phone = "Phone number must be exactly 11 digits.";
      isValid = false;
    }

    // Password validation
    if (!form.password) {
      newErrors.password = "Password is required.";
      isValid = false;
    } else if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
      isValid = false;
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        form.password
      )
    ) {
      // At least one uppercase letter, one lowercase letter, one digit, and one special character
      newErrors.password =
        "Password must contain at least one uppercase, one lowercase, one digit, and one special character.";
      isValid = false;
    }

    // Password Confirmation validation
    if (!form.passwordConfirmation) {
      newErrors.passwordConfirmation = "Confirm password is required.";
      isValid = false;
    } else if (form.password !== form.passwordConfirmation) {
      newErrors.passwordConfirmation = "Passwords do not match.";
      isValid = false;
    }

    setErrors(newErrors); // Update the errors state
    return isValid;
  };

  const signup = async (formData: {
    name: string;
    email: string;
    phone: string;
    password: string;
    passwordConfirmation: string;
  }) => {
    setLoading(true);
    setMessage(""); // Clear general messages
    setErrors({}); // Clear previous errors from a potential failed backend call

    try {
      await axios.post(
        "https://e-commerce-web-site-ten.vercel.app/api/v1/auth/signUp",
        formData
      );

      setMessage("Signup successful!");
      return true;
    } catch (error: any) {
      console.error("Signup error:", error.response);
      const apiErrors = error.response?.data?.errors;
      if (apiErrors && Array.isArray(apiErrors)) {
        const formattedErrors: Record<string, string> = {};
        apiErrors.forEach((err: any) => {
          if (err.param) {
            formattedErrors[err.param] = err.msg;
          }
        });
        setErrors(formattedErrors); // Set backend validation errors
      } else {
        setMessage(error.response?.data?.message || "Signup failed."); // Set general backend errors
      }

      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Optional: Clear error for the specific field as user types
    if (errors[e.target.name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));
    }
  };

  const toastOptions = {
    toastClassName:
      "bg-emerald-400 text-white font-semibold rounded shadow-md",
    bodyClassName: "text-white",
    progressClassName: "bg-white",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Perform client-side validation first
    const formIsValid = validateForm();

    if (!agreed) {
      toast.error("You must agree to the Terms & Privacy", toastOptions);
      return;
    }

    if (!formIsValid) {
      // If client-side validation fails, do not proceed to API call
      toast.error("Please correct the errors in the form.", toastOptions);
      return;
    }

    // If client-side validation passes, proceed to backend signup
    const success = await signup(form);
    if (success) {
      toast.success("Signup successful!", toastOptions);

      // Login user immediately after successful signup
      try {
        const res = await axios.post(
          "https://e-commerce-web-site-ten.vercel.app/api/v1/auth/login",
          {
            email: form.email,
            password: form.password,
          }
        );
        console.log("Login response after signup:", res.data);

        // Assuming your backend returns user name on login via res.data.user.name or res.data.data.name
        let userName: string;
        let userEmail: string;
        if (res.data.user && res.data.user.name && res.data.user.email) {
            userEmail = res.data.user.email;
            userName = res.data.user.name;
        } else if (res.data.data && res.data.data.name && res.data.data.email) {
            userEmail = res.data.data.email;
            userName = res.data.data.name;
        } else if (res.data.name && res.data.email) { // Fallback if name is directly at root
            userName = res.data.name;
            userEmail = res.data.email;
        } else {
            console.warn("User name not found in login response after signup.");
            userName = form.name || "User"; // Use the name from the signup form itself as a fallback
            userEmail = form.email; // Use the email from the signup form
        }

        login(res.data.token, userName , userEmail); // Call login from context
        navigate("/"); // Navigate to home page
      } catch (err: any) {
        console.error("Auto-login error after signup:", err.response);
        toast.error("Signup succeeded but auto-login failed. Please try logging in manually.", toastOptions);
        navigate("/login"); // fallback to manual login
      }
    } else {
      // If backend signup failed, the errors state would already be set by the signup function
      toast.error("Signup failed. Please check the form errors.", toastOptions);
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
        error={errors.name} // Display error message here
      />

      <LabeledInput
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={form.email}
        onChange={handleChange}
        error={errors.email} // Display error message here
      />
      <LabeledInput
        label="Phone"
        name="phone"
        type="tel"
        placeholder="Enter your phone number"
        value={form.phone}
        onChange={handleChange}
        error={errors.phone} // Display error message here
      />

      <LabeledPasswordInput
        label="Password"
        name="password"
        placeholder="Enter your password"
        value={form.password}
        onChange={handleChange}
        error={errors.password} // Display error message here
      />
      <LabeledPasswordInput
        label="Confirm Password"
        name="passwordConfirmation"
        placeholder="Confirm your password"
        value={form.passwordConfirmation}
        onChange={handleChange}
        error={errors.passwordConfirmation} // Display error message here
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

      {message && ( // This message is for general backend errors not tied to a specific field
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