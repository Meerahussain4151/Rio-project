import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div class="bg-[url('/header.jpeg')] bg-no-repeat w-[100%] h-[350px] bg-cover flex justify-center items-center mx-auto header"> 
        <div className='flex flex-col items-start gap-8 headercontents'>
            <h1 className='font-extrabold text-5xl pl-6'>Order Your Bike Accessories Here</h1>
            <p className='w-[50%] gap-6 pl-6 text-lg pt-3 headercontentsp'>Elevate your riding experience with our top-quality motorcycle accessories. Whether you’re cruising the open road or tackling off-road terrain, we have the gear to keep you safe, comfortable, and stylish.</p>
            <div className='pl-6 pt-2'>
            <button className='rounded-2xl border-2 border-black p-2 hover:scale-110 bg-teal-700 headercontentbutton'>View items</button>
            </div>
        </div>
    </div>
  )
}

export default Header
