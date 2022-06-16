import React from 'react'
import { WishlistCard } from '../../Components/Styled-Components/WishlistCard';
import "../Style/MainBody.css";
import styles from "../Style/Wishlist.module.css"

const Wishlist = () => {
  const wishlistItem = JSON.parse(localStorage.getItem("sephorawishlist")) || [];
 
  const RemoveItem = (id) => {
    wishlistItem = wishlistItem.filter((d) => d.id !== id);
    localStorage.setItem("item", JSON.stringify(wishlistItem));
    if (wishlistItem.length === 0) {
      localStorage.removeItem("item");
    }
  }
  
  return (
    <div>
      <h1 className={styles.title}>MY FAVOURITES</h1>
      <div className={styles.cardDiv}>
        {wishlistItem.map((d) => (
          <WishlistCard>
            <img src={d.image_url} className={styles.imageWishlist} />
            <div className={styles.wishlistInfo}>
              <p>{d.brandname}</p>
              <h4>{d.productName}</h4>
              <p>{d.background}</p>
              <p style={{fontWeight:"Bold"}}>Rs {d.price}</p>
              <p onClick={RemoveItem}>Remove</p>
            </div>
          </WishlistCard>
        ))}
      </div>


    </div>
  )
}

export default Wishlist