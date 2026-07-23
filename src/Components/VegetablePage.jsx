import React from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

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
        <motion.div
        initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        className="card bg-base-100 w-96 shadow-sm">
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
</motion.div>
    </Link>
  )
}

export default VegetablePage