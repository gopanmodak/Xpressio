import React from 'react'
import { Link } from 'react-router-dom'

const NewArrivalsPages = ({product}) => {
  return (
    <Link to={`/newarrivals/${product.slug}`}>
        <div className="card bg-base-100 w-96 shadow-sm h-120 my-10">
  <figure>
    <img
      src={product.images}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {product.title}
      <div className="badge badge-secondary text-gray-800 p-4">${product.price}</div>
    </h2>
    <p>{product.description.slice(0, 50)}...</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    </Link>
  )
}

export default NewArrivalsPages