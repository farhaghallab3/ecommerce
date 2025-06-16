import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

import LoginForm from "./components/organisms/LoginForm/LoginForm";
import { SignupPage } from "./pages/Home/SignUp/SignupPage";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { AuthProvider } from "./context/AuthContext";
import VerifyOtpForm from "./components/organisms/Forms/VerifyOtpForm";
import { GoogleOAuthProvider } from '@react-oauth/google';

import SellerDashboardPage from "./pages/SellerDashboard";




function App() {

  return (
     <GoogleOAuthProvider clientId="10402982650-mib55r6gp857j7gjc40tvbqnsr009k8f.apps.googleusercontent.com">
    <BrowserRouter basename='/'>
      <AuthProvider>
  
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
         <Route path="/login" element={<LoginForm />} />
         <Route path="/verify-otp" element={<VerifyOtpForm />} />
         <Route path="/seller-dashboard" element={<SellerDashboardPage />} />
        {/* <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />  */}
        
      </Routes> 
 
<ToastContainer
  toastClassName="rounded shadow-md font-semibold bg-emerald-400  text-white"
  className="text-white"
  progressClassName="bg-white"
  position="top-center"
  autoClose={1000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>

  </AuthProvider>
    </BrowserRouter>
  </GoogleOAuthProvider >
  );
}

export default App;
