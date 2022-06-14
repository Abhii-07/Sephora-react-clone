/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { PricingTable } from "./pricingTable";
import { AddForm } from "../AddressFrom/AddForm";
import "./pricingTable.css";
// import { Button } from "../checkoutpage/Button";
export const Payment = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [showForm, setShowForm] = useState(false);
  //for pay on delivery
  const [show, setShow] = useState(false);
  // parsing local storage for cartItems
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("sai"));
    setCart(cartItems);
    let total = 0;
    cartItems.forEach((ele) => {
      total += ele.price;
    });
    console.log(total);
    setCartTotal(total);
  }, []);
  // for address from pop-up
  useEffect(() => {
    const add = JSON.parse(localStorage.getItem("sephoraAddress"));
    if (add) setShowForm(false);
    else setShowForm(true);
  }, []);

  // handle for pay on delivery;
  const handleShow = () => {
    console.log(show);
    show ? setShow(false) : setShow(true);
  };

  //handle for alert
  const handleAlert = () => {
    alert("Order Placed");
  };

  return (
    <>
      <div className="p_page_wrapper">
        <div className="p_det">
          <div>
            <span>
              <strong>TOTAL PAYABLE AMOUNT</strong>
            </span>
            <span>
              <strong>Rs. {Math.round((cartTotal * 86) / 100)}</strong>
            </span>
          </div>
          <p>
            <strong>PAYMENT METHODS</strong>
          </p>
          <hr />
          <div className="payment_methods">
            <div>
              <input type="radio" className="radio" onClick={handleShow} />{" "}
              <label>Credit/ Debit Card</label>
              <div className={show ? "display" : "none"}>
                {/* <form action="" preventDefault = "true"> */}
                <div className="form">
                  <input
                    type="text"
                    placeholder="Enter Card Number"
                    className="i"
                  />
                  <input type="text" placeholder="Enter Name" className="j" />
                  <input type="text" placeholder="Enter CVV" className="k" />
                  <input type="text" placeholder="MM" className="l" />
                  <input type="text" placeholder="YYYY" className="m" />
                </div>
                {/* </form> */}
              </div>
            </div>
            <div>
              <input type="radio" className="radio" />{" "}
              <label>Net Banking</label>
            </div>
            <div>
              <input type="radio" className="radio" />{" "}
              <label>Paytm Wallet</label>
            </div>
            <div>
              <input type="radio" className="radio" />{" "}
              <label>Other Wallets</label>
            </div>
            <div>
              <input type="radio" className="radio" /> <label>UPI</label>
            </div>
            <div>
              <input type="radio" className="radio" />{" "}
              <label>
                Pay on Delivery (UPI,Wallet,Card and Cash){" "}
                <span>(additional charge Rs. 40)</span>
              </label>
            </div>
          </div>
        </div>
        <div className="price_det">
          <PricingTable total={cartTotal} />
          <div className="continue" onClick={handleAlert}>
            <Link to={`/home`}>
              <span style = {{color : "white"}}>PLACE ORDER</span>
            </Link>
          </div>
        </div>
      </div>
      {showForm ? <AddForm setShowForm={setShowForm} /> : null}
    </>
  );
};
