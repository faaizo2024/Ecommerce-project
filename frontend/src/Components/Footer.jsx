import React from 'react'
import instaimg1 from "../assets/instagram-1.jpg"
import instaimg2 from "../assets/instagram-2.jpg"
import instaimg3 from "../assets/instagram-3.jpg"
import instaimg4 from "../assets/instagram-4.jpg"
import instaimg5 from "../assets/instagram-5.jpg"
import instaimg6 from "../assets/instagram-6.jpg"
const Footer = () => {
  return (
   <>
    <footer className='section__container footer__container'>
     <div className='footer__col'>
        <h4>CONTACT INFO</h4>
        <p>
            <span><i className="ri-map-pin-2-fill"></i></span>
            123,London Bridge Street, London
        </p>
        <p>
            <span><i className="ri-mail-fill"></i></span>
            Support@fizka.com
        </p>
        <p>
            <span><i className="ri-phone-fill"></i></span>
            (+012)3456 789
        </p>
       
        </div>
        <div className='footer__col'>
            <h4>COMPANY</h4>
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Work With Us</a>
            <a href="">Our Blogs</a>
            <a href="">Trems & Condition</a>
            </div>
            <div className='footer__col'>
            <h4>USEFUL LINK</h4>
            <a href="">Help</a>
            <a href="">Track your order </a>
            <a href="">Men</a>
            <a href="">Women</a>
            <a href="">Dresses</a>
            </div>
            <div className='footer__col'>
                <h4>INSTAGRAM</h4>
                <div className='instagram__grid'>
                 <img src={instaimg1} alt="" />   
                 <img src={instaimg2} alt="" />   
                 <img src={instaimg3} alt="" />   
                 <img src={instaimg4} alt="" />   
                 <img src={instaimg5} alt="" />   
                 <img src={instaimg6} alt="" />   
                </div>
                </div>   
    </footer>
    <div className='footer__bar'>
        Copyright ©2025 by Fizka. All rights reserved
    </div>
   </>
  )
}

export default Footer
