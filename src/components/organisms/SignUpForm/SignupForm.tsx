import { Link } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import Divider from "../../atoms/Divider";
import LabeledInput from "../../atoms/LabeledInput/LabeledInput";
import CheckboxWithLabel from "../../molecules/CheckboxWithLabel";
import GoogleLoginButton from "../../molecules/GoogleLoginButton";

const Signup = () => (
    <div className="w-full  flex items-center justify-center  ">
    <div className="w-full max-w-sm  ">
    <form className="space-y-6 w-full max-w-sm">
      <h1 className="text-2xl font-bold text-center">Create an Account</h1>
      
      <GoogleLoginButton />
      <Divider text="Or" />

      <LabeledInput label="Name" placeholder="Enter your Name" />
      <LabeledInput label="Email" placeholder="Enter your Email" />
      <LabeledInput label="Password" type="password" placeholder="Enter your password" />

      <div className="flex items-center justify-between text-sm">
        <CheckboxWithLabel 
          label={
            <>
              I agree to the <span className="text-blue-500">Terms & Privacy</span>
            </>
          } 
        />
      
      </div>

      <div className="flex justify-center py-2 bg-emerald-400 hover:bg-emerald-500 text-white py-2 rounded-[16px] transition">
        <Button text="Sign Up" type="submit" />
      </div>

      <p className="text-center text-sm text-gray-500">
        Already have an account? <Link to="/login" className="text-blue-500">Log in</Link>
      </p>
    </form>
    </div>
  </div>
);

export default Signup;
