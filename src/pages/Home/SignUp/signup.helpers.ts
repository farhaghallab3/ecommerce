import type { FormData } from "./signup.types";


export const validateSignup = (data: FormData) => {
  const errors: Partial<FormData> = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Invalid email format";
  }

  if (!data.password || data.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }

  if (data.password !== data.passwordConfirmation) {
    errors.passwordConfirmation = "Passwords do not match";
  }

  return errors;
};
