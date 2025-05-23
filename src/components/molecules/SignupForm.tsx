import React, { useState } from "react";

import CheckboxWithLabel from "./CheckboxWithLabel";

import { useSignup } from "../../hooks/useSignup";
import { Link } from "react-router-dom";
import LabeledInput from "../atoms/LabeledInput/LabeledInput";
import LabeledPasswordInput from "../atoms/Input/LabeledPasswordInput";
import { Button } from "../atoms/Button/Button";

const SignupForm = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [agreed, setAgreed] = useState(false);
  const { loading, message, errors, signup } = useSignup();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("You must agree to the Terms & Privacy");
      return;
    }
    const success = await signup(form);
    if (success) {
      setForm({ name: "", email: "", password: "" });
      setAgreed(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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

      <LabeledPasswordInput
        label="Password"
        name="password"
        placeholder="Enter your password"
        value={form.password}
        onChange={handleChange}
        error={errors.password}
      />

      <div className="text-sm mt-4">
        <CheckboxWithLabel
          label={
            <>
              I agree to the <span className="text-blue-500 cursor-pointer">Terms & Privacy</span>
            </>
          }
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
      </div>

      <div className="text-center">
        <Button text={loading ? "Signing Up..." : "Sign Up"} disabled={loading} type="submit" />
      </div>

      {message && (
        <p className={`text-center text-sm mt-2 ${message.includes("successful") ? "text-green-600" : "text-red-600"}`}>
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
