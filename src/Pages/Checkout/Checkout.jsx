import React, { useEffect, useState } from 'react'
import { MdFavoriteBorder } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ProductCard } from '../../Components/Styled-Components/ProductStyle';
import { AddForm } from '../AddressFrom/AddForm';
import styles from "../Style/Checkout.module.css"

const Checkout = () => {
    // const port = process.env.PORT || 4000;
    const shoppingCart = JSON.parse(localStorage.getItem("shopping-cart")) || [];
    console.log(shoppingCart);

    const [posts, setPosts] = useState([]);
    const [subtotal, setSubtotal] = useState();
    const [total, setTotal] = useState(subtotal);
    // const [cart, setCart] = useState([posts]);
    const [discount, setDiscount] = useState(0)


    const getPrice = () => {
        for (let i = 0; i < posts.length; i++) {
            let Prices = (posts[i].price)
            console.log("Prices:", Prices)
        }
    }

    // const getdata = async () => {
    //     fetch(`https://sephora-clone.herokuapp.com/cart`)
    //         .then((d) => d.json())
    //         .then((data) => {
    //             setPosts(data);
    //             for (let i = 0; i < posts.length; i++) {
    //                 let Prices = (posts[i].price)
    //                 // console.log("Prices:", Prices )
    //             }
    //             // console.log(data[0].price);
    //         });
    // };

    const getTotal = () => {
        let ans = 0;
        shoppingCart.map((item) => {
            console.log(" Posts :", posts);
            ans += item.price;
            setSubtotal(ans);
            console.log("Total Ans :", subtotal);

        });
    }

    useEffect(() => {
        // getdata();
        getTotal();

    }, []);

    const addWishlist = (e) => {

        var wishlistArr =
            JSON.parse(
                localStorage.getItem("sephorawishlist")
            ) || [];
        wishlistArr.push(e);
        localStorage.setItem(
            "sephorawishlist",
            JSON.stringify(wishlistArr)
        );

    }
    
    return (
        <div>
            <h1 className={styles.title}>SHOPPING BAG</h1>
            <div className={styles.displayCartPage}>
                <div className={styles.firstBox}>
                    {shoppingCart.map((e) => (
                        <div
                            id="productCard"
                            key={e.productName}
                            onClick={(event) => {
                                let arr = []
                                arr.push(e)
                                localStorage.setItem("hair-cart", JSON.stringify(arr));
                            }}
                        >

                            <ProductCard posts={posts}>
                                <div className={styles.cartCard}>
                                    <div className={styles.imgDiv}>
                                        <Link to={`/ProductDetails`}>
                                            <img src={e.image_url} className={styles.productImg} />
                                        </Link>
                                        {/* <div id="Scrollup_Button">
                                        <button
                                            onClick={addWishlist}
                                        >
                                            <MdFavoriteBorder id="symbollcss"></MdFavoriteBorder>
                                            <span id="textCSS">FAVOURITE</span>
                                        </button>

                                    </div> */}
                                    </div>
                                    <Link to={`/productdetail`} style={{ textDecoration: "none", color: "balck" }}>
                                        <div className={styles.infoDiv}>
                                            <p>{e.brandname}</p>
                                            <p>{e.productName}</p>
                                            <p>{e.colors}</p>
                                            <p>{e.background}</p>
                                            <div className={styles.removeItemDiv}>
                                                <p>Remove</p>
                                                <p>Wishlist</p>
                                            </div>

                                        </div>
                                    </Link>
                                    <div>
                                        <p>₹ {e.price}</p>
                                    </div>

                                </div>

                                {/* <Link to={`/productdetail`} style={{ textDecoration: "none" }}>
                                    <div id="textDiv">
                                        <p>{e.brandname}</p>
                                        <p>{e.productName}</p>
                                        <p>₹ {e.price}</p>
                                    </div>
                                </Link> */}
                            </ProductCard>

                        </div>
                    ))}
                </div>
                <div className={styles.secondBox}>
                    <div onClick={() => {
                        setDiscount(1000)
                        total = subtotal - discount;
                        // setTotal(total)
                    }} className={styles.secondBoxTitle}>Apply Promo Code</div>
                    <div>
                        {/* <h1>Overview</h1>
                        <p>Subtotal : {total}</p>
                        <p>Discount</p> */}
                        <table>
                            <thead>
                                <td>Overview</td>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Subtotal</td>
                                    <td>{subtotal}</td>
                                </tr>
                                <tr>
                                    <td style={{color:"pink"}}>Discount</td>
                                    <td>{discount}</td>
                                </tr>

                                <tr>
                                    <td>GST</td>
                                    <td>100</td>
                                </tr>
                                <tr>
                                    <td>Delivery Charges</td>
                                    <td>99</td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td>{subtotal + 100 + 99 - discount}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className={styles.checkoutBtn}><Link className={styles.checkoutBtn} to = "/addform">CHECKOUT</Link></div>
                        <div><button className={styles.ShopMoreBtn}>SHOP MORE</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout