import React, { useContext } from 'react'
import { StoreContext } from '../../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

function Cart() {

  const { cartItems, product_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext)

  const navigate =useNavigate();

  return (
    <div className='mt-24 ml-2'>
      <div>
        <div className='grid grid-cols-6  items-center text-teal-600 text-lg ml-2'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {product_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className='grid grid-cols-6  items-center m-2 ml-2 text-sm'>
                  <img className='w-14' src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => { removeFromCart(item._id) }} className='cursor-pointer pl-10'>X</p>
                </div>
                <hr className='h-1 border-none bg-slate-100' />
              </div>

            )
          }
        })}
      </div>
      <div className='mt-20 flex justify-between gap-[20%]'>
        <div className='flex-1 flex flex-col gap-5 ml-2'>
          <h2>Cart Totals</h2>
          <div>
            <div className='flex justify-between text-slate-600'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='m-2' />
            <div className='flex justify-between text-slate-600'>
              <p>Delivery fee</p>
              <p>${getTotalCartAmount()===0?0:2 }</p>
            </div>
            <hr className='m-2' />
            <div className='flex justify-between text-slate-600'>
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')} className='border-none text-white bg-teal-600 w-[35%] p-3 rounded cursor-pointer '>PROCEED TO CHECKOUT</button>
        </div>
        <div className='flex-1'>
          <div className='pr-2 mr-[20%]'>
            <p className='text-slate-600'>If you have a promo code, Enter it here</p>
            <div className='mt-2 flex justify-between items-center bg-slate-50 rounded '>
              <input className='bg-transparent  outline-none border-none pl-2' type="text" placeholder='promo code ' />
              <button className='w-[15%] px-3 py-1 bg-black border-none text-white rounded'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
