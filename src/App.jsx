import Navbar from './Component/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Home/cart/Cart'
import Placeorder from './pages/Home/cart/placeorder/Placeorder'
import Exploreitems from './Component/Exploreitems/Exploreitems'
import { Routes, Route } from 'react-router-dom'
import Footer from './Component/Footer/Footer'
import { useState } from 'react'
import LoginPopup from './Component/LoginPopup/LoginPopup'
function App() {
  
  const[showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div>
        <Navbar setShowLogin={setShowLogin } />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />
    </>

  )
}

export default App
