import React from 'react';
import { useSelector } from 'react-redux';
import { removeItem } from './features/AddtoCart/cartSlice';
import { useDispatch } from 'react-redux';
const Cart = () => {
  const {cart}=useSelector((state)=>state.allCart);
  const dispatch = useDispatch();
  console.log(cart);
  return (
   <>
    <div className='mx-20'>
    <div className='grid grid-cols-1'>
     {
        cart.map(
            item=>(  
              <div className='flex  mb-5 border-2 justify-between items-center p-3 rounded-sm ' key={item.id}>
              <img src={item.image} alt='' className='w-14 h-14'/>
              <div className='border-2 *:mx-2'>
                <button onClick={()=>increment}>+</button>
                <button>0</button>
                <button>-</button>
                </div>
              <span className='font-bold'>${item.price}</span>
              <button className='border-cyan-800 border-2  px-2  rounded-lg w-8 h-9 text-black hover:bg-cyan-800' onClick={()=>dispatch(removeItem(item.id))}>X</button>
              </div>
            )
        )
     }
    </div>
    </div>
   </>
  );
};

export default Cart;
