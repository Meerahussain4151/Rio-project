import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

const [currState,setCurrState] = useState("Login")

  return (
    <div className='absolute z-10 w-full h-full bg-opacity-75 bg-black grid'>
      <form className='place-self-center max-w-80 bg-slate-300 flex flex-col gap-6 py-6 px-7 rounded-e-lg text-sm  '>
        <div className=' flex justify-between items-center text-black font-bold'>
            <h2>{currState}</h2>
            <img className='w-4 cursor-pointer' onClick={()=>setShowLogin(false )} src={assets.cross_icon} alt="" />
        </div>
        <div className='flex flex-col gap-5'>
            {currState==="Login"?<></>: <input className='outline-none border-solid p-2 rounded'  type="text" placeholder='Your Name' required />}
            <input className='outline-none border-solid p-2 rounded' type="Email" placeholder='Your Email' required />
            <input className='outline-none border-solid p-2 rounded' type="Password" placeholder='Password' required />
        </div>
        <button className='border-none p-2 rounded text-white bg-teal-600 text-sm cursor-pointer'>{currState==="Sign up"?"Create account":"Login"}</button>
        <div className='flex items-start gap-3 -mt-3'>
            <input className='mt-1' type="checkbox" required  />
            <p>By continung,i agree with to the term of use & Policy.</p>
        </div>
        {currState==="Login"
        ? <p>Create a new account?<span className='text-teal-600 font-medium cursor-pointer' onClick={()=>setCurrState("Sign up")}>Click here</span></p>
        : <p>Already have an account?<span className='text-teal-600 font-medium cursor-pointer' onClick={()=>setCurrState("Login")}>Login here </span></p>
        }

      </form>
    </div>
  )
}

export default LoginPopup
