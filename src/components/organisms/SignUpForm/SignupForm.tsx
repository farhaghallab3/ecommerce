// signup:
import  { useState } from "react";
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
      newErrors.email = "Invalid email format.";
      isValid = false;
    }

    // Phone validation
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!/^[0-9]{11}$/.test(form.phone)) {
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

    setErrors(newErrors);
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
    setMessage("");
    setErrors({});

    try {
      const res = await axios.post(
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

    const formIsValid = validateForm();

    if (!agreed) {
      toast.error("You must agree to the Terms & Privacy", toastOptions);
      return;
    }

    if (!formIsValid) {
      toast.error("Please correct the errors in the form.", toastOptions);
      return;
    }

    const success = await signup(form);
    if (success) {
      toast.success("Signup successful!", toastOptions);

      try {
        const res = await axios.post(
          "https://e-commerce-web-site-ten.vercel.app/api/v1/auth/login",
          {
            email: form.email,
            password: form.password,
          }
        );
        console.log("Login response after signup:", res.data);

        let userName: string;
        let userEmail: string;
        if (res.data.user && res.data.user.name && res.data.user.email) {
          userEmail = res.data.user.email;
          userName = res.data.user.name;
        } else if (res.data.data && res.data.data.name && res.data.data.email) {
          userEmail = res.data.data.email;
          userName = res.data.data.name;
        } else if (res.data.name && res.data.email) {
          userName = res.data.name;
          userEmail = res.data.email;
        } else {
          console.warn("User name not found in login response after signup.");
          userName = form.name || "User";
          userEmail = form.email;
        }

        login(res.data.token, userName, userEmail);
        navigate("/");
      } catch (err: any) {
        console.error("Auto-login error after signup:", err.response);
        toast.error("Signup succeeded but auto-login failed. Please try logging in manually.", toastOptions);
        navigate("/login");
      }
    } else {
      toast.error("Signup failed. Please check the form errors.", toastOptions);
    }
  };

  return (
    // Outer container for centering and background
    <div className="min-h-screen w-full flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8 mt-10 ">
      {/* Form container with white background and shadow */}
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full  p-6 rounded-lg shadow-lg space-y-2"
          style={{
          // Custom style for the green border effect as seen in the image
          boxShadow: '0 0 0 #00B207, 0 8px 16px rgba(0,0,0,0.2)' // Inner shadow + outer green glow
        }} // Adjusted spacing and padding
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Create Account</h2> {/* Added heading */}

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
                <span className="text-blue-500 cursor-pointer hover:underline">
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
            className="w-full" // Make button full width
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

        <p className="text-center text-sm text-gray-500 mt-4"> {/* Adjusted margin-top */}
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;