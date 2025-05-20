// src/App.tsx


import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/organisms/Layout";
import Home from "./pages/Home/Home";



function App() {

  return (
    <BrowserRouter basename=''>
    <Layout>
  <Home />
  </Layout>
    </BrowserRouter>
  );
}

export default App;
