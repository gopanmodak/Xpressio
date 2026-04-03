import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-center border-b-2 font-bold text-3xl border-zinc-200 p-3 font-mono">
        About Us
      </h1>

      <div className="max-w-6xl mx-auto border my-10 border-zinc-300 p-3 shadow-lg">
        <div className="flex flex-col gap-5 justify-center items-center bg-zinc-200 pb-5">
          <img
            src="https://d86vad5pql9wj.cloudfront.net/uploads/Main%20banner%20(1).png"
            alt=""
          />
          <h1 className="text-3xl font-bold font-sans text-red-600">
            Welcome to Xpressio
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://d86vad5pql9wj.cloudfront.net/uploads/1_slide.png"
              alt=""
            />
          </div>

          <div className="flex flex-col gap-4 justify-center items-start">
            <p className="text-xl font-sans">
              At Xpressio, we’re genuinely concerned for our customers'
              well-being! From daily essentials to fresh produce, we bring you
              the best quality at the best prices.
            </p>
            <p className="font-bold text-red-500 text-xl md:text-2xl flex-start">
              Welcome to Xpressio!
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-2xl md:text-4xl font-bold font-sans text-center py-5 mt-10">
            Fresh Produce Sourcing Ecosystem
          </h1>
          <img
            src="https://d86vad5pql9wj.cloudfront.net/uploads/GAP_slide.png"
            alt=""
            className="object-cover p-5"
          />
        </div>

        <div className="flex flex-col sm:flex-row px-3 gap-4 justify-center my-10">
          <img
            src="https://d86vad5pql9wj.cloudfront.net/uploads/Splits_pic_AfterGAP%20(1).png"
            alt="Split view 1"
            className="w-full sm:w-1/2 object-cover rounded-lg"
          />
          <img
            src="https://d86vad5pql9wj.cloudfront.net/uploads/Splits_pic_AfterGAP2.png"
            alt="Split view 2"
            className="w-full sm:w-1/2 object-cover rounded-lg"
          />
        </div>

        <div className="bg-red-600 py-12 px-4 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-center text-white max-w-7xl mx-auto">
            <div className="md:col-span-3 border border-zinc-50 bg-linear-to-t from-purple-500 to-blue-500 rounded-3xl text-white overflow-hidden shadow-xl justify-center items-center">
              <div className="bg-white rounded-t-3xl py-6 px-4 text-center">
                <p className="text-red-500 text-5xl font-extrabold">814</p>
                <h1 className="text-2xl font-bold text-red-900">
                  Total Outlet
                </h1>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 justify-center items-center ">
                  <div className="text-center">
                    <p className="text-lg font-medium opacity-90 text-center">
                      Own Outlet
                    </p>
                    <p className="text-3xl font-bold border-b-2 border-white pb-2 inline-block">
                      87
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-lg font-medium opacity-90">Franchise</p>
                    <p className="text-3xl font-bold border-b-2 border-white pb-2 inline-block">
                      727
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-4xl font-extrabold">8</p>
                    <p className="text-lg font-medium">Division</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-extrabold">63</p>
                    <p className="text-lg font-medium">Districts</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 text-center md:pt-20">
              <h2 className="text-xl md:text-3xl font-bold max-w-md mb-4 text-start">
                Shwapno is already Bangladesh's most loved & trusted retail
                brand.
              </h2>
              <p className="text-base md:text-xl text-start">
                Our Vision is to redefine modern retail and shape the future of
                E-grocery.
              </p>
            </div>

            <div className="md:col-span-5 flex justify-center">
              <img
                src="https://d86vad5pql9wj.cloudfront.net/uploads/Map-Copy1.png"
                alt="Map"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10 items-center">
          <div className="flex justify-center">
            <img
              src="https://d86vad5pql9wj.cloudfront.net/uploads/icon%20(2).png"
              alt="Icon"
              className="w-full max-w-md h-70 object-contain"
            />
          </div>

          <div className="flex justify-center">
            <img
              src="https://d86vad5pql9wj.cloudfront.net/uploads/Group%202.png"
              alt="Group"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
