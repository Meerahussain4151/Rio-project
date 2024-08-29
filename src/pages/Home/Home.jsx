import React, {useState} from 'react'
import Header from '../../component/Header/Header'
import Exploreitems from '../../Component/Exploreitems/Exploreitems'
import ProductDisplay from '../../Component/ProductDisplay/ProductDisplay'
import Appdownload from '../../Component/Appdownload/Appdownload'

const Home = () => {
  const[category,setCategory]=useState("All");
  return (
    <div>
      <Header/>
      <Exploreitems category={category} setCategory={setCategory}/>
      <ProductDisplay category={category}/>
      <Appdownload/>
      </div>
  )
}

export default Home
