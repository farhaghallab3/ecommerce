import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

import LoginForm from "./components/organisms/LoginForm/LoginForm";
import { SignupPage } from "./pages/Home/SignUp/SignupPage";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import VerifyOTP from './pages/VerifyOTP';




function App() {

  return (
    <BrowserRouter basename='/'>
  
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
         <Route path="/login" element={<LoginForm />} />
         <Route path="/verify-otp" element={<VerifyOTP />} />
        {/* <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />  */}
      </Routes> 
 
<ToastContainer
  toastClassName="rounded shadow-md font-semibold bg-emerald-400  text-white"
  className="text-white"
  progressClassName="bg-white"
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>

  
    </BrowserRouter>
  );
}

export default App;
