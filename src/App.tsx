import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { SignupPage } from "./pages/SignupPage";
import LoginForm from "./components/organisms/LoginForm/LoginForm";



function App() {

  return (
    <BrowserRouter basename='/ecommerce'>
  
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
         <Route path="/login" element={<LoginForm />} />
        {/* <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />  */}
      </Routes> 

  
    </BrowserRouter>
  );
}

export default App;
