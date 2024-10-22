import React from 'react'
import { Link } from 'react-router-dom';
import bannerimg from "../../assets/header.png"

const Banner = () => {
  return (
    <div className='section__container header__container '>
    <div className='header__content z-30'>
        <h4 className='uppercase'>up To 20% Discount on</h4>
        <h1>Girl's Fashion</h1>
        <p>Discover the latest trends and express your u ique style with our women's fashion 
        website.Explore acurated collection of clothing, Accessories, and footwear 
        that caters to every taste and ocasion.</p>
        <button className='btn'><Link to='/shop'>  EXPLORE NOW </Link></button>
    </div>
    <div className='header__image'>
        <img src={bannerimg} alt="banner image" />
    </div>
    </div>
  )
}

export default Banner
