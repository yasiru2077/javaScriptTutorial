import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Navbar() {

  const cartProducts = useSelector(state => state.cart);

  return (
    <div>
        <>
            <Link to="/"> Product</Link>
            <br />
            <Link to="/cart"> Cart {cartProducts.length}</Link>
        </>
    </div>
  )
}

export default Navbar