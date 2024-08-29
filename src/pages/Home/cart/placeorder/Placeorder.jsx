import React, { useContext } from 'react'
import { StoreContext } from '../../../../Context/StoreContext'

function Placeorder() {
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className='flex items-start justify-betweenga gap-[50%] mt-[2%] ml-16'>
      <div className='w-[100%] max-w-[30%]'>
      <p className='text-3xl font-bold mb-8'>Delivery Information</p>
      <div className='flex gap-8'>
        <input className='mb-3 w-[100%] p-2 border-gray-300 rounded outline-teal-600 bg-slate-50 border-none' type="text" placeholder='First Name'/>
        <input className='mb-3 w-[100%] p-2 border-gray-300 rounded outline-teal-600  bg-slate-50 border-none' type="text" placeholder='Last Name' />
      </div>
      <input className='mb-3 w-[100%] p-2 border-gray-300 rounded outline-teal-600  bg-slate-50 border-none' type="email" placeholder='Email address'/>
      <input className='mb-3 w-[100%] p-2 border-gray-300 rounded outline-teal-600  bg-slate-50 border-none' type="text" placeholder='Street'/>
      <div className='flex gap-2'>
        <input className='mb-3 w-[100%] p-2 border-gray-300 rounded outline-teal-600  bg-slate-50 border-none' type="text" placeholder='City'/>
        <input className='mb-3 w-[100%] p-2 border-gray-300 rounded outline-teal-600  bg-slate-50 border-none' type="text" placeholder='State' />
      </div>
      <div className='flex gap-2'>
        <input className='mb-3 w-[100%] p-2 border-gray-300 rounded outline-teal-600  bg-slate-50 border-none' type="text" placeholder='Pin code'/>
        <input className='mb-3 w-[100%] p-2 border-gray-300 rounded outline-teal-600  bg-slate-50 border-none' type="text" placeholder='Country' />
      </div>
      <input className='mb-3 w-[100%] p-2 border-gray-300 rounded outline-teal-  bg-slate-50 border-none' type="text" placeholder='Phone' />
      </div>
      <div className='w-[100%] max-w-[40%] -ml-[20%] mr-[12%] mt-10'>
      <div className='flex-1 flex flex-col gap-5'>
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
          <button onClick={()=>navigate('/order')} className='border-none text-white bg-teal-600 w-[55%] p-3 rounded cursor-pointer mt-10'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default Placeorder
