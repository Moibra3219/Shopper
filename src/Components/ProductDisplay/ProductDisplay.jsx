import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';


function ProductDisplay(props) {
    const {product} = props;
    const {addToCart} = useContext (ShopContext);
  return (
    <div className='ProductDisplay'>
        <div className="ProductDisplay-left">
            <div className="ProductDisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />

            </div>
            <div className="ProductDisplay-img">
            <img className='ProductDisplay-main-img' src={product.image} alt="" />

            </div>
        </div>
        <div className="ProductDisplay-right">
            <h1>{product.name}</h1>
            <div className="ProductDisplay-right-stars">
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_dull_icon} alt='' />
            <p>(122)</p>
            </div>
            <div className="ProductDisplay-right-prices">
                <p className="ProductDisplay-right-prices-old">${product.old_price}</p>
                <p className="ProductDisplay-right-prices-new">${product.new_price}</p>
            </div>
            <div className="ProductDisplay-right-desription">
                A lightweight, usually knitted, pullover shirt, close-fitting and a round nickline and short sleeves. worn as undershirt.
            </div>
            <div className="ProductDisplay-right-size">
                <h1>Select Size</h1>
                <div className="ProductDisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='ProductDisplay-right-category'><span>Category: </span>Women, T=Shirt, Crop Top  </p>
            <p className='ProductDisplay-right-category'><span>Tags: </span>Modern, Latest </p>

        </div>
    </div>
  )
}

export default ProductDisplay