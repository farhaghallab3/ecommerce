import { FcGoogle } from 'react-icons/fc';

const GoogleLoginButton = () => (
  <button
    type="button"
    className="flex items-center justify-center gap-2 w-full py-2 border border-2 border-black rounded-md hover:bg-gray-100 transition"
  >
    <FcGoogle className="text-lg" />
    <span className="text-sm font-semibold">Sign in with Google</span>
  </button>
);

export default GoogleLoginButton;
