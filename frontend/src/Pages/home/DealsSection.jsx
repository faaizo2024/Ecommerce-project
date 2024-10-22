import React from 'react'
import dealsimg from "../../assets/deals.png"

const DealsSection = () => {
  return (
   <section className='section__container deals__container'>

    <div className='deals__image'>
        <img src={dealsimg} alt="" />
    </div>
   
    <div className='deals__content'>
        <h5>Get UP TO 20% Discount</h5>
        <h4>Deals of This month</h4>
        <p>our women's fashion Deals of the month are here to make your style dream a 
           reality without breaking the bank. Discover acurated collections of exquite
           clothing, accessories, and footwear , all handpicked to elavate your wardrobe.</p>

           <div className='deals__countdown flex-wrap'>
            <div className='deals__countdown__card'>
                <h4>14</h4>
                <p>Days</p>
            </div>
            <div className='deals__countdown__card'>
                <h4>20</h4>
                <p>Hours</p>
            </div>

            <div className='deals__countdown__card'>
                <h4>15</h4>
                <p>mins</p>
            </div>

            <div className='deals__countdown__card'>
                <h4>05</h4>
                <p>Secs</p>
            </div>

           </div>
         
        
    </div>
   </section>
  )
}

export default DealsSection
