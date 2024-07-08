import React, { useEffect } from 'react'
import { useState } from 'react'
import Card from '../src/components/Card'
import axios from 'axios'
const Product = () => {
  const [products,setProducts]=useState([])
  useEffect(()=>{
     const fetchProducts =async()=>{
        const res =await axios.get('https://fakestoreapi.com/products');
        const data= res.data;
        setProducts(data);
     };
     fetchProducts();
  },[]
  )
  return (
    <div className='mx-20'>
        <h2 className='font-bold text-center my-10 text-3xl'>Product Page</h2>
    <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-4'>
     {
        products.map(
            item=>(
           
               <Card key={item.id} items={item}/>
              
               
            )
        )
     }
    </div>
    </div>
  )
}

export default Product