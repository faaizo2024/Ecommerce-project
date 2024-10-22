import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import product from "../../data/products.json"
import ProductCards from '../Shop/ProductCards';
const Categorypage = () => {
    const {categoryName} = useParams();
    const [filterproducts , setfilterproducts]= useState([])

     // Fetch products based on categoryName
        // setfilterproducts(fetchProducts(categoryName))
    useEffect(()=>{
      const filtered = product.filter((product) => product.category === categoryName.toLowerCase());
      setfilterproducts(filtered)
       
    },[categoryName])

    useEffect(()=>{
      window.scrollTo(0,0);
    })
    return (
      <>
   <section className='section__container bg-primary-light'>

    <h2 className='section__header capitalize'>{categoryName}</h2>
    <p className='section__subheader'>Browse a diverse range of categories, from chic dresses to
       versatile accessories. Elavate your style today!</p>

   </section>
{/* product card */}

<div className='section__container'>
  <ProductCards products={filterproducts}/>
</div>
  
  </>
  )
}

export default Categorypage
