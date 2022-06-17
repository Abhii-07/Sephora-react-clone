/* eslint-disable no-unused-vars */
import styled from "styled-components"
import React from "react"
import {useState,useEffect} from "react"
import "./addForm.css"
import { Link } from "react-router-dom";
export const AddForm = ({setShowForm}) => {
    
    const [formData, setFormData] = useState({
      name: "",
      address: "",
      number: "",
      altNumber: "",
      pincode: "",
      landmark: "",
    });
    const [address,setAddress] = useState({})
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });      
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();  
      localStorage.setItem("sephoraAddress", JSON.stringify(formData));
      console.log(formData)
      setShowForm(false)
      setFormData("")
      alert("Order placed")
    };
    
    useEffect(()=>{
        let add = JSON.parse(localStorage.getItem("sephoraAddress"))
        setAddress(add)

    },[])
    console.log(address)
    return (
      <div className="form_wrapper">
        <div className="addForm">
          <h2>Address Page</h2>
          <form className="grid" onSubmit={handleSubmit} autoComplete= "off">
            <input
              className="a"
              name="name"
              type="text"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="b"
              name="address"
              type="text"
              placeholder="Address*"
              value={formData.address}
              onChange={handleChange}
            />
            <input
              className="c"
              name="number"
              type="text"
              placeholder="Phone Number*"
              value={formData.number}
              onChange={handleChange}
            />
            <input
              className="d"
              name="altNumber"
              type="text"
              placeholder="Alternate Number"
              value={formData.altNumber}
              onChange={handleChange}
            />
            <input
              className="e"
              name="pincode"
              type="text"
              placeholder="Pincode*"
              value={formData.pincode}
              onChange={handleChange}
            />
            <input
              className="f"
              name="landmark"
              type="text"
              placeholder="Landmark"
              value={formData.landmark}
              onChange={handleChange}
            />
            <input
              className="g"
              type="submit"
              id="submit"
              onClick={handleSubmit}
            />
            
            
          </form>
        </div>
      </div>
    );
  };