import React, { useContext, useState } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../../Components/assets/cart_cross_icon.png'

function CartItems() {
    const {all_product, CartItems, removeFromCart} = useContext (ShopContext)
  return (
    <div className='CartItems'>
        <div className="CartItems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
       {all_product.map(()=>{
        if(cartItem[e.id]>0)
            <div>
        <div className="CartItems-format">
            <img src={e.image} alt="" className='Carticon-product-icon' />
            <p>{e.image}</p>
            <p>${e.new_price}</p>
            <button className='CartItems-quantity'>{cartItem[e.id]}</button>
            <p>{e.new_price*cartItem[e.id]}</p>
            <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />

        </div>
    </div>
       })}
    </div>
  )
}

export default CartItems