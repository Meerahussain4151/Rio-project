import React,{useState} from 'react'
import './Exploreitems.css'
import { item_list } from '../../assets/assets'

const Exploreitems = ({category,setCategory}) => {
  
  return (
    <>
    {/* <div id='Exploreitems'>
      <h1 className='text-3xl p-3 font-extrabold'>Explore Our Items</h1>
      <p className='text-xl w-[70%] pt-2 pl-3'>Whether you’re gearing up for a long ride or just looking to enhance your biking experience, we’ve got you covered. Dive into our extensive collection and discover the perfect gear to suit your needs</p>
      <div>
      <div class='flex justify-between text-center mt-8 overflow-scroll m-8'>
        {item_list.map((item,index)=>{
          return(
            <div key={index} class='' onClick={()=>setCategory(prev=>prev===item.item_name?"All":item.item_name)}>
              <div className='' >
              <img className={category===item.item_name?"border-4 size-28 rounded-full border-black":"size-24 rounded-full border-4 border-teal-700 p-4"} src={item.item_image} />
              </div>
              <p class='text-base  cursor-pointer'>{item.item_name}</p>
            </div>
          )
        })} 
      </div>
      </div>
    </div> */}
    <div className='explore-items' id='explore-items'>
    <h1>Explore Our Items</h1>
    <p className='explore-items-text'>Whether you’re gearing up for a long ride or just looking to enhance your biking experience, we’ve got you covered. Dive into our extensive collection and discover the perfect gear to suit your needs</p>
    <div className="explore-items-list">
      {item_list.map((item,index)=>{
        return(
          <div onClick={()=>setCategory(item.item_name)} key={index} className='explore-items-list-items'>
            <img className={category===item.item_name?"active ":""} src={item.item_image} alt="" />
            <p>{item.item_name}</p>
          </div>
        )
      })}
    </div>
    <hr />
    </div>
    </>
  )
}

export default Exploreitems