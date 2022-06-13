import React from 'react'
import { ProductCard } from '../../Components/Styled-Components/ProductStyle';
import "../Style/MainBody.css";

const Wishlist = () => {
    const details = JSON.parse(localStorage.getItem("sephorawishlist")) || [];
  return (
    <div id="productpagecart">Wishlist
        {details.map((d) => (
            <ProductCard>
                <img src={d.image_url} id="productimg1" />
                <img src={d.image2_urll} id="productimg2" />
                <h1>{d.brandname}</h1>
            </ProductCard>
        ))}


    </div>
  )
}

export default Wishlist