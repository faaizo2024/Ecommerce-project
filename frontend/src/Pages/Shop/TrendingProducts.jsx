import React, { useState } from 'react'
import ProductCards from './ProductCards'

import products from "../../data/products.json"

const TrendingProducts = () => {
    // add trending products data here
    const[visibleproducts ,setvisibleproducts] = useState(0);
    // handle show more products
    const Loadmoreproducts = () => {
        setvisibleproducts(prev => prev + 4);
    }
  return (
    <section className='section__container product__container'>
        <h2 className='section__header'>Trendingproduct </h2>
        <p className='section__subheader mb-12'>Discover the hottest picks: Elavate your style with our curated
            collection of Trending Women's Fashion products.</p>
        

          {/* products cards */}
          <div className='mt-12'>
          <ProductCards products={products.slice(0, visibleproducts)}/>
          </div>
        
         {/* load more products btn*/}
         <div className='product__btn'> {
             visibleproducts < products.length && (
                 <button className='btn' onClick={Loadmoreproducts}>Load More</button>
             )
            
            
            }
         
            
         </div>
        </section>
  )
}

export default TrendingProducts
