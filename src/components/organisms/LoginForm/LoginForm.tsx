import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import { Button } from "../../atoms/Button/Button";
import Divider from "../../atoms/Divider";
import LabeledInput from "../../atoms/LabeledInput/LabeledInput";
import CheckboxWithLabel from "../../molecules/CheckboxWithLabel";
import GoogleLoginButton from "../../molecules/GoogleLoginButton";

const LoginForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://e-commerce-web-site-ten.vercel.app/api/v1/auth/login", form);
      localStorage.setItem("token", res.data.token);
      toast.success("Logged in successfully!");
      navigate("/"); // go to home
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        className="space-y-4 max-w-md w-full mx-auto px-4 sm:px-6"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-center">Welcome Back</h1>
        <GoogleLoginButton />
        <Divider text="Or" />

        <LabeledInput
          label="Email"
          placeholder="Enter your Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <LabeledInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <div className="flex items-center justify-between text-sm">
          <CheckboxWithLabel label="Keep me logged in" />
          <a href="#" className="text-blue-500">
            forgot password?
          </a>
        </div>

        <Button text="Sign In" type="submit" />

        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
