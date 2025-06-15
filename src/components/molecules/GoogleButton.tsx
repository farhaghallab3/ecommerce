// src/molecules/GoogleLoginButton.tsx
import { FcGoogle } from 'react-icons/fc';
import { useGoogleLogin } from '@react-oauth/google'; // <-- Import useGoogleLogin
import axios from 'axios'; // <-- Import axios
import { toast } from 'react-toastify'; // <-- Import toast
import { useNavigate } from 'react-router-dom'; // <-- Import useNavigate
import { useAuth } from '../../context/AuthContext';


const GoogleButton = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Get the login function from AuthContext

  const handleGoogleSuccess = async (tokenResponse: any) => {


    console.log("Google login success:", tokenResponse); // Log the response to inspect its structure

    try {

      const backendRes = await axios.post(
        "https://e-commerce-web-site-ten.vercel.app/api/v1/auth/signUp-google", 
        { googleAccessToken: tokenResponse.access_token } 

      );

      console.log("Backend response to Google login:", backendRes.data);


      const userToken = backendRes.data.token;
      const userName = backendRes.data.user?.name || backendRes.data.data?.name || "User"; // Adjust based on your backend's response structure

      if (userToken && userName) {
        login(userToken, userName, backendRes.data.email); // Log in using your AuthContext
        toast.success("Signed in with Google successfully!");
        navigate("/"); // Redirect to home page
      } else {
        toast.error("Google sign-in failed: Missing token or user data from backend.");
      }

    } catch (error: any) {
      console.error("Error during Google sign-in or backend verification:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Failed to sign in with Google.");
    }
  };

  const handleGoogleError = (errorResponse: any) => {
    console.error("Google login failed:", errorResponse);
    toast.error("Google sign-in failed. Please try again.");
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: handleGoogleSuccess,
    onError: handleGoogleError,
    
  });

  return (
    <button
      type="button"
      onClick={() => loginWithGoogle()} 
      className="flex items-center justify-center gap-2 w-full py-2 border border-2 border-black rounded-md hover:bg-gray-100 transition"
    >
      <FcGoogle className="text-lg" />
      <span className="text-sm font-semibold">Sign in with Google</span>
    </button>
  );
};

export default GoogleButton;