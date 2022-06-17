import React from 'react'
import { Link } from 'react-router-dom'

const Payment = () => {
  return (
    <div>
        <h1>Thanks for shopping with us</h1>
        <button><Link to = "/payment" >Continue Shopping</Link></button>
    </div>
  )
}

export default Payment