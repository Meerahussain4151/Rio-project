import React from 'react'
import { assets } from '../../assets/assets'

const Appdownload = () => {
  return (
    <div className='m-auto mt-24 text-xl text-center font-medium'>
      <p>For Better Experience Download <br/>Rio Bike Accessories App </p>
      <div className='flex justify-center gap-2 mt-10 '>
        <img className='w-32 max-w-48 cursor-pointer hover:scale-105 p-2' src={assets.app_store} alt="" />
        <img className='w-32 max-w-48 cursor-pointer hover:scale-105 p-2' src={assets.play_store} alt="" />
      </div>
    </div>
  )
}

export default Appdownload
