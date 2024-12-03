import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from "../../assets/banner-img.png"


const Banner = () => {
  return (

    <div className='section__container header__container'>

      <div className='header__content z-30'>

        <h4 className='uppercase'>UP TO 20% Discount on</h4>

        <h1>Gadget's Shop</h1>

        <p>This is best webpage to buy electronic gadgets. Best best over and budgetable products are available...</p>

        <button className='btn'><Link to="/shop">EXPLORE NOW</Link></button>

      </div>

      <div className='header__image'>
        <img src={bannerImg} alt="banner" />
      </div>

    </div>

  )
}

export default Banner