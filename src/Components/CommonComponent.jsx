import React from "react";

const CommonComponent = () => {
  return (
    <div className="px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10">

        {/* Card 1 */}
        <div className="bg-fuchsia-200 flex gap-3 items-center p-4 rounded-2xl">
          <img
            src="https://cdn-icons-png.flaticon.com/128/9326/9326180.png"
            alt=""
            className="h-12 sm:h-14"
          />
          <div>
            <h3 className="font-bold text-lg sm:text-xl">Free Shipping</h3>
            <p className="text-gray-800 text-sm sm:text-base">
              On orders over $80
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-orange-200 flex gap-3 items-center p-4 rounded-2xl">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2268/2268728.png"
            alt=""
            className="h-12 sm:h-14"
          />
          <div>
            <h3 className="font-bold text-lg sm:text-xl">Special Sale</h3>
            <p className="text-gray-800 text-sm sm:text-base">
              Extra $9 off all items
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-green-200 flex gap-3 items-center p-4 rounded-2xl">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1611/1611261.png"
            alt=""
            className="h-12 sm:h-14"
          />
          <div>
            <h3 className="font-bold text-lg sm:text-xl">Save Money</h3>
            <p className="text-gray-800 text-sm sm:text-base">
              30 Days guarantee
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-blue-200 flex gap-3 items-center p-4 rounded-2xl">
          <img
            src="https://cdn-icons-png.flaticon.com/128/10015/10015677.png"
            alt=""
            className="h-12 sm:h-14"
          />
          <div>
            <h3 className="font-bold text-lg sm:text-xl">Online Support</h3>
            <p className="text-gray-800 text-sm sm:text-base">
              Support 24/7
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CommonComponent;