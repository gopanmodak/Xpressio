import React from 'react'
import { Link } from 'react-router-dom'

const NewArrivalsPages = ({product}) => {
  return (
    <Link to={`/newarrivals/${product.slug}`}>
        <div className="card bg-base-100 w-96 shadow-sm h-120 my-10">
  <figure>
    <img
      src={product?.images || "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko="}
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