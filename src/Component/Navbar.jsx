import React, { useContext, useState } from 'react'
import logo from '../assets/logo1.png'
import icon from '../assets/Search_icon.jpeg'
import Basketicon from '../assets/basket_icon.png'
import { Link } from 'react-router-dom'
import { StoreContext } from '../Context/StoreContext'


export default function Navbar({ setShowLogin }) {

  const [menu, setMenu] = useState("menu")
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className='flex justify-around  gap-20 navbar w-[100%] h-[100%]'>
      <div className='h-[12%] sm:w-[12%] w-[40%] pt-5 logo '>
        <Link to='/'> <img src={logo} /></Link>
      </div>
      <div>
        <ul className="sm:flex gap-20 p-16 text-lg -ml-7 cursor-pointer navbar-menu  ">
          <li onClick={() => setMenu("home")} className={menu === "home" ? "active pb-2 border-b-4 border-black" : ""}>Home</li>
          <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active pb-2 border-b-4 border-black" : ""}>Menu</li>
          <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active pb-2 border-b-4 border-black" : ""}>Mobile app</li>
          <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active pb-2 border-b-4 border-black" : ""}>Contact us</li>
        </ul>
      </div>
      <div className='sm:pt-16 pt-10 sm:pr-0 pr-5 -ml-6 navbar-right cursor-pointer '>
        <img src={icon} />
      </div>
      <div className='sm:pt-16 pt-10 -ml-5 sm:pr-0 pr-5 relative navbar-right cursor-pointer '>
        <Link to='/cart'> <img src={Basketicon} /> </Link>
        <div className={getTotalCartAmount() === 0 ? "" : "absolute h-2 w-2 bg-red-600 rounded top-12 -right-1 dot"}></div>

      </div>
      <div className='sm:pt-16 pt-10 sm:pr-6 pr-14 -ml-10 transition-all navbar-button '>
        <button className="rounded-2xl  border-2 border-black p-1 hover:bg-teal-200 transition duration-300 hover:scale-110 " onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>

  )
}
