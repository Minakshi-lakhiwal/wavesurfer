import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/AddtoCart/cartSlice'
const Card = ({items}) => {
    const {id,price,image}=items;
    const dispatch = useDispatch();
    const handleAddToCart =()=>{
       dispatch(addItem(items));
    };
  return (
    <div className=''>
        <div className='flex flex-col mb-5 border-2 justify-center items-center p-3 rounded-sm w-32' key={id}>
           <img src={image} alt='' className='w-24 h-24'/>
           <span>{price}</span>
           <button className='bg-cyan-800 text-white px-3 py-2 rounded-lg w-24 h-9' onClick={handleAddToCart}>Add</button>
        </div>
    </div>
  )
}

export default Card