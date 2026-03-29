import React from 'react'

const CommonComponent = () => {
  return (
    <div>

         <div className="max-w-6xl mx-auto flex gap-10 my-10">
        <div className="bg-fuchsia-200 w-65 flex gap-3 justify-center items-center p-4 rounded-2xl">
          <img
            src="https://cdn-icons-png.flaticon.com/128/9326/9326180.png"
            alt=""
            className="h-15"
          />
          <div>
            <h3 className="font-bold text-xl">Free Shipping</h3>
            <p className="text-gray-800">On orders over $80</p>
          </div>
        </div>

        <div className="bg-orange-200 w-65 flex gap-3 justify-center items-center rounded-2xl">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2268/2268728.png"
            alt=""
            className="h-15"
          />
          <div>
            <h3 className="font-bold text-xl">Special Sale</h3>
            <p className="text-gray-800">Extra $9 off all items</p>
          </div>
        </div>

        <div className="bg-green-200 w-65 flex gap-3 justify-center items-center rounded-2xl">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1611/1611261.png"
            alt=""
            className="h-15"
          />
          <div>
            <h3 className="font-bold text-xl">Save Money</h3>
            <p className="text-gray-800">30 Days guarantee</p>
          </div>
        </div>

        <div className="bg-blue-200 w-65 flex gap-3 justify-center items-center rounded-2xl">
          <img
            src="https://cdn-icons-png.flaticon.com/128/10015/10015677.png"
            alt=""
            className="h-15"
          />
          <div>
            <h3 className="font-bold text-xl">Online Support</h3>
            <p className="text-gray-800">Support 24/7</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommonComponent