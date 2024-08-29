import React, { useContext } from 'react'

import { StoreContext } from '../../Context/StoreContext'
import { product_list } from '../../assets/assets'
import Productitem from '../Productitem/Productitem'

function ProductDisplay({category}) {


    const {Product_list} = useContext(StoreContext)
  return (
    <div className='mt-8'>
      <h2 className='font-bold text-3xl'>Top Items Here</h2>
      <div className='grid grid-cols-4 mt-8 gap-x-12 gap-y-11'>
        {product_list.map((item,index) => {
          if(category==="All" || category===item.category){
            return <Productitem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
          }
        })}
      </div>
    </div>
  )
}

export default ProductDisplay
 