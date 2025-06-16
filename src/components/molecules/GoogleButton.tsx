import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthContext';

const GoogleButton = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSuccess = async (credentialResponse: any) => {
    try {
      const idToken = credentialResponse.credential;

      const backendRes = await axios.post(
        "https://e-commerce-web-site-ten.vercel.app/api/v1/auth/signUp-google",
        { idToken } // <-- send ID token instead of access token
      );

      const userToken = backendRes.data.token;
      const userName = backendRes.data.data?.name || "User";

      if (userToken && userName) {
        login(userToken, userName, backendRes.data.data?.email);
        toast.success("Signed in with Google successfully!");
        navigate("/");
      } else {
        toast.error("Google sign-in failed: Missing token or user data.");
      }

    } catch (err: any) {
      toast.error(err.response?.data?.message || "Google sign-in failed.");
    }
  };

  const handleError = () => {
    toast.error("Google login failed. Try again.");
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
      width="100%"
      size="medium"
      shape="rectangular"
      text="signin_with"
      useOneTap
    />
  );
};

export default GoogleButton;
