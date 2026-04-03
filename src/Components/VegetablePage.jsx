import React from 'react'
import { Link } from 'react-router-dom'

const VegetablePage = ({item}) => {
  if (!item){
    return(
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    )
  }
  return (
    <Link to={`/vegetable/${item.slug}`}>
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={item.image}
      alt="" 
      className='h-70 w-full object-cover'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item.productName}</h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between items-center">
        <p className='font-bold'>${item.price}</p>
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </Link>
  )
}

export default VegetablePage