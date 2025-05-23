
import Divider from "../../../components/atoms/Divider";
import GoogleLoginButton from "../../../components/molecules/GoogleLoginButton";
import SignupForm from "../../../components/organisms/SignUpForm/SignupForm";


const Signup = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Create an Account</h1>
        <GoogleLoginButton />
        <Divider text="Or" />
        <SignupForm />
        </div>
    </div>
  );
};

export default Signup;
