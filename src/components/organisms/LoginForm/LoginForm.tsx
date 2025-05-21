import { Link } from "react-router-dom";
import  Button  from "../../atoms/Button/Button";
import Divider from "../../atoms/Divider";
import LabeledInput from "../../atoms/LabeledInput/LabeledInput";
import CheckboxWithLabel from "../../molecules/CheckboxWithLabel";
import GoogleLoginButton from "../../molecules/GoogleLoginButton";


const LoginForm = () => (
  <div className="min-h-screen flex items-center justify-center  px-4">
    <form className="space-y-6 w-full max-w-sm">
      <h1 className="text-2xl font-bold text-center">Welcome Back</h1>
      <GoogleLoginButton />
      <Divider text="Or" />

      <LabeledInput label="Email" placeholder="Enter your Email" />
      <LabeledInput label="Password" type="password" placeholder="Enter your password" />
      
      <div className="flex items-center justify-between text-sm">
        <CheckboxWithLabel label="Keep me logged in" />
        <a href="#" className="text-blue-500">forgot password?</a>
      </div>

      <div className="flex justify-center py-2 bg-emerald-400 hover:bg-emerald-500 text-white py-2 rounded-[16px]  transition">
  <Button text="Sign In" 
  
  type="submit" />
</div>
      <p className="text-center text-sm text-gray-500">
        Don’t have an account? <Link to="/signup" className="text-blue-500" >Sign up</Link>
      </p>
    </form>
  </div>
);

export default LoginForm;
