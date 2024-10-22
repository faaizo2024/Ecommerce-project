// import React, { useState } from 'react'
// import  productsData from "../../data/products.json"
// import ProductCards from '../Shop/ProductCards';

// const Search = () => {
//   const [searchquery ,setsearch] = useState();
//   const [filterproducts,setfilterproducts] = useState(productsData);

//   const handleSearch = () => {
//   const query = searchquery.tolocaleLowercase
//   const filtered = productsData.filter(product => product.name.toLowerCase().includes(query))
//   || product.description.toLowerCase().includes(query);

//   setfilterproducts(filtered);
//   }
//   return (
//    <>
//   <section className='section__container bg-primary-light'>

// <h2 className='section__header capitalize'>search product</h2>
// <p className='section__subheader'>Browse a diverse range of categories, from chic dresses to
//    versatile accessories. Elavate your style today!</p>

// </section>

// <section className='section__container'> 
//     <div className='w-full mb-12 flex flex-col md:flex-row items-center justify-center gap-4'>
//         <input type="text" 
//         value={searchquery}
//         onChange={(e) => setsearch(e.target.value)}
//         className='search-bar w-full max-w-4xl p-2 border rounded'
//         placeholder='Search for products...' />
//         <button className='search-button w-full md:w-auto py-2 px-8 bg-primary text-white rounded ' onClick={handleSearch}>Search</button>
//     </div>

//   <ProductCards products={filterproducts}/>
// </section>
//    </>
//   )
// }

// export default Search







import React, { useState } from 'react';
import productsData from "../../data/products.json";
import ProductCards from '../Shop/ProductCards';

const Search = () => {
  const [searchquery, setsearch] = useState(''); // Initialize search query as an empty string
  const [filterproducts, setfilterproducts] = useState(productsData); // Start with all products

  const handleSearch = () => {
    const query = searchquery.toLowerCase(); // Correctly convert the search query to lowercase

    // If the query is not empty, filter products by name or description
    if (query) {
      const filtered = productsData.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
      setfilterproducts(filtered); // Update filtered products
    } else {
      setfilterproducts(productsData); // If query is empty, show all products
    }
  };

  return (
    <>
      <section className='section__container bg-primary-light'>
        <h2 className='section__header capitalize'>Search Product</h2>
        <p className='section__subheader'>
          Browse a diverse range of categories, from chic dresses to versatile accessories. Elevate your style today!
        </p>
      </section>

      <section className='section__container'>
        <div className='w-full mb-12 flex flex-col md:flex-row items-center justify-center gap-4'>
          <input
            type="text"
            value={searchquery}
            onChange={(e) => setsearch(e.target.value)} // Update search query on input change
            className='search-bar w-full max-w-4xl p-2 border rounded'
            placeholder='Search for products...'
          />
          <button
            className='search-button w-full md:w-auto py-2 px-8 bg-primary text-white rounded'
            onClick={handleSearch} // Trigger search on button click
          >
            Search
          </button>
        </div>

        {/* Display filtered products */}
        <ProductCards products={filterproducts} />
      </section>
    </>
  );
};

export default Search;

