import React from 'react'
import { useLoaderData } from 'react-router-dom'
import NewArrivalsPages from '../Components/NewArrivalsPages'

const NewArrivals = () => {
  const products=useLoaderData()
  console.log(products)

  if (!products) {
  return (
    <div className="flex justify-center items-center h-screen">
      <span className="loading loading-spinner text-error"></span>
    </div>
  );
}
  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>

      <div><img src="https://d2t8nl1y0ie1km.cloudfront.net/images/6805f0537974006bbb95ebcf_Kurtis%20Tunics%20&%20Tops.png" alt="" /></div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>{products.map(product=> <NewArrivalsPages key={product.id} product={product}/>)}</div>
    </div>
  )
}

export default NewArrivals