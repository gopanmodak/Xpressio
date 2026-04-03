import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaAmazonPay, FaCcAmazonPay, FaCcMastercard } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { SiAmericanexpress } from "react-icons/si";
import { useLoaderData, useParams } from "react-router-dom";

const NewArrivalsDetails = () => {
  const { slug } = useParams();
  const products = useLoaderData();

  const singleData = products.find((product) => product.slug === slug);

  if (!singleData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2">
          <img
            src={singleData.images?.[0]}
            alt={singleData.title}
            className="h-80 md:h-96 rounded-2xl object-cover w-full"
          />
        </div>

        <div className="flex flex-col gap-3  md:w-1/2">
          <h2 className="text-3xl font-bold">{singleData.title}</h2>

          <p className="font-bold text-red-500 text-lg">
            ${singleData.price}
            <span className=" text-gray-500 font-normal px-1 text-xs ml-2">
              Per Piece
            </span>
          </p>

          <p className="text-gray-600">{singleData.categories}</p>

          <button className="btn btn-active mt-3">Add To Cart</button>

          <div className="mt-6 bg-zinc-100 p-4 rounded-2xl">
            <h3 className="font-bold mb-3">Other Payment Methods:</h3>

            <div className="flex gap-5 text-3xl justify-center items-center mb-4">
              <SiAmericanexpress className="text-blue-800 hover:text-red-600 transition-colors rounded-md" />
              <RiVisaLine className="text-blue-800 hover:text-red-600 transition-colors rounded-md" />
              <FaCcMastercard className="text-purple-800 hover:text-red-600 transition-colors rounded-md" />
              <FaCcAmazonPay className="text-red-800 hover:text-red-600 transition-colors rounded-md" />
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 text-center">
              <p className="bg-zinc-200 p-2 rounded-lg font-semibold">
                Bikas/Nogod
              </p>
              <p className="bg-zinc-200 p-2 rounded-lg font-semibold">
                City Bank
              </p>
              <p className="bg-zinc-200 p-2 rounded-lg font-semibold">
                Cash On Delivery
              </p>
              <p className="bg-zinc-200 p-2 rounded-lg font-semibold">
                Card Payment
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-500 flex items-center justify-center gap-2 mt-4">
            <CiDeliveryTruck className="text-2xl" /> Delivery: 1-2 hours
          </p>
        </div>
      </div>

      <div className="mt-10">
        <article className="max-w-6xl mx-auto bg-zinc-200 p-5 rounded-2xl">
          <h2 className="text-2xl font-bold py-3 inline-block border-b-2 border-black">
            Product Description
          </h2>
          <p className="text-md py-5">{singleData.description}</p>
        </article>
      </div>
    </div>
  );
};

export default NewArrivalsDetails;
