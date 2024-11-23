import React from 'react'
import './DescriptionBox.css'


function DescriptionBox() {
  return (
    <div className='DescriptionBox'>
      <div className="DescriptionBox-navigator">
        <div className="DescriptionBox-nav-box">Description</div>
        <div className="DescriptionBox-nav-box fade">Reviews {122}</div>
      </div>
      <div className="DescriptionBox-description">
        <p>
        Your one-stop online shop for premium-quality products!

We offer a wide range of categories, including men's fashion, women's fashion, kids' clothing, and much more, tailored to fit your lifestyle. With a user-friendly interface, seamless navigation, and a secure checkout process, shopping has never been this easy.

At Shopper, we pride ourselves on providing:

High-quality products carefully curated to meet your needs.
Affordable pricing without compromising on style or quality.
Fast and reliable shipping so you can enjoy your purchases sooner.
Excellent customer service, ready to assist you anytime.
Explore exclusive deals, trending items, and timeless classics that cater to every taste. Whether you're refreshing your wardrobe or finding the perfect gift, we've got you covered.


        </p>
        <p>
        Start your shopping journey today and experience the convenience of online retail redefined!
        </p>
      </div>

    </div>
  )
}

export default DescriptionBox