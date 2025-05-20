// src/pages/SignUp.tsx

import { Link } from "react-router-dom";

import { Checkbox } from "../atoms/Checkbox";
import { GoogleIcon } from "../atoms/GoogleSignInIcon";
import { Input } from "../atoms/Input/Input";
import { Button } from "../atoms/Button/Button";

export const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  ">
      <div className="w-full max-w-md p-8 ">
        <h2 className="text-3xl font-semibold text-center mb-8">Create Your Account</h2>

        <Button className="w-full flex items-center justify-center gap-2 border border-black py-2 rounded-lg border-[2px] bg-[#ECEAEA] rounded-[16px] mb-6 hover:shadow-sm transition">
          <GoogleIcon />
          <span className="font-medium">Sign Up with Google</span>
        </Button>

        <div className="flex items-center gap-2 mb-6">
          <hr className="flex-grow border-black h-0.5" />
          <span className="text-black font-medium px-2">Or</span>
          <hr className="flex-grow border-black h-0.5" />
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <Input type="text" placeholder="Enter your name" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <Input type="email" placeholder="Enter your Email"  />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <Input type="password" placeholder="Enter your password" />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox label={""} />
            <span className="text-sm font-medium">
              I agree to the{" "}
              <a href="#" className="text-[#4C88F8] hover:underline">
                Terms &amp; Privacy
              </a>
            </span>
          </div>
          <Button >
            Sign Up
          </Button>
        </form>

        <p className="text-md text-center mt-6 text-gray-400">
          already have an account?{" "}
          <Link to="/login" className="text-[#4C88F8] hover:underline font-medium">
            login
          </Link>
        </p>
      </div>
    </div>
  );
};
