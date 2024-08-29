import React from 'react'

import { assets } from '../../assets/assets'

const Footer = () => {
    return (

        <div className='bg-cyan-800 text-white w-[100%] items-center mt-24'>
            <div className='p-7 grid-cols-3 grid'>
                <div className='pl-10'>
                    <h1 className='text-2xl text-blue-400 font-extrabold'>Rio Bike Accessories.</h1>
                    <p className='pt-4'>Rio Bike Accessories is your ultimate destination for high-quality bike accessories and gear. We’re passionate about cycling and committed to providing you with the best products to enhance your riding experience. </p>
                    <div className='flex pt-3 gap-3 cursor-pointer'>
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                    </div>
                </div>
                <div className='pl-[50%] p-4 '>
                    <h2 className='text-lg'>COMPANY</h2>
                    <ul className='pt-2 cursor-pointer'>
                        <li>* Home</li>
                        <li>* About us</li>
                        <li>* Delivery</li>
                        <li>* Privacy Policy</li>
                    </ul>
                </div>
                <div className='pt-4 pl-[20%] '>
                    <h2 className='text-lg'>GET IN TOUCH</h2>
                    <ul className='pt-3 cursor-pointer'>
                        <li>* 9047580719</li>
                        <li>* riobikeshop4151@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='text-center'>@ 2024 Rio Bike Accessories. All Rights Reserved.</p>
        </div>

    )
}

export default Footer
