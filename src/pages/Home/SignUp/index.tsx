
//import Divider from "../../../components/atoms/Divider";
//import GoogleButton from "../../../components/molecules/GoogleButton";
import SignupForm from "../../../components/organisms/SignUpForm/SignupForm";


const Signup = () => {
  return (
    <div className="w-full  flex items-center justify-center py-8">
      <div className="w-full ">
        <h1 className="text-2xl font-bold text-center mb-6">Create an Account</h1>
        {/* <GoogleButton />
        <Divider text="Or" /> */}
        <SignupForm />
        </div>
    </div>
  );
};

export default Signup;
