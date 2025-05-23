import axios from "axios";
import { mainHost } from "../config";

export const signUp = async (data: {
  name: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirmation: string;
}) => {
  const response = await axios.post(`${mainHost}/api/v1/auth/signUp`, data);
  return response.data;
};
