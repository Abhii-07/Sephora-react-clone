import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Pages/Login/Login";
import Makeup from "./Pages/Products/Makeup";
import Hair from "./Pages/Products/Hair";
import { ProductDetails } from "./Pages/Product-Detail-Page/ProductDetails";
import Wishlist from "./Pages/Wishlist/Wishlist";
import UpperNav from "./Components/Upper-Navbar/UpperNav";
import { Payment } from "./Pages/shippingPaymentDet/PaymentPage"
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <UpperNav/>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/Hair" element={<Hair/>}></Route>
        <Route path="/Makeup" element={<Makeup/>}></Route>
        <Route path="/ProductDetails" element={<ProductDetails />}></Route>
        <Route path="/wishlist" element={<Wishlist/>}></Route>
        <Route path="/payment" element={<Payment/>}></Route>
      </Routes>
      <Home/>
    </div>
  );
}

export default App;
