import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextProvider } from "../AuthProvider/AuthProvider";
import { RiVisaLine } from "react-icons/ri";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";

const VegetableDetails = () => {
  const { slug } = useParams();
  const { vegetable } = useContext(ContextProvider);

  const singleVegetableData = vegetable.find((item) => item.slug === slug);

  if (!singleVegetableData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 justify-center mt-10 p-3">
      <div className="flex flex-col md:flex-row gap-10 justify-center mt-10">
        <div className="w-full md:w-1/2">
          <img
            src={singleVegetableData.image}
            alt={singleVegetableData.title}
            className="h-100 rounded-2xl object-cover w-full"
          />
        </div>

        <div className="flex flex-col gap-3 ">
          <h2 className="text-3xl font-bold">{singleVegetableData.title}</h2>
          <p className="font-bold text-red-500 text-lg">
            ${singleVegetableData.price}{" "}
            <span className="text-gray-500 text-xs ml-1 font-normal">
              Per Piece
            </span>{" "}
          </p>
          <p>{singleVegetableData.categories}</p>
          <button className="btn btn-active">Add To Cart</button>

          <div className="mt-5 bg-zinc-100 p-3 rounded-2xl ">
            <h1 className=" font-bold">Other Payment Methods :</h1>
            <div className="flex gap-5 text-3xl my-5 justify-center items-center">
              <SiAmericanexpress className="text-blue-800 hover:text-red-800 rounded-md" />
              <RiVisaLine className="text-blue-800  hover:text-red-800 rounded-md" />
              <FaCcMastercard className="text-purple-800  hover:text-red-800 rounded-md" />
              <FaAmazonPay className="text-red-800  hover:text-red-800 rounded-md" />
            </div>

            <div className="grid grid-cols-2 gap-5 mt-3 text-sm text-gray-500 justify-center text-center">
              <p className="bg-zinc-200 p-2 rounded-lg text-black font-semibold">
                Bikas/Nogod
              </p>
              <p className="bg-zinc-200 p-2 rounded-lg text-black font-semibold">
                City Bank
              </p>
              <p className="bg-zinc-200 p-2 rounded-lg text-black font-semibold">
                Cash On Delivery
              </p>
              <p className="bg-zinc-200 p-2 rounded-lg text-black font-semibold">
                Card Payment
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-500 flex items-center justify-center">
            <span className="text-2xl mr-2">
              <CiDeliveryTruck />
            </span>{" "}
            Delivery: 1-2 hours
          </p>
        </div>
      </div>

      <div>
        <article className="max-w-6xl mx-auto bg-zinc-200 p-5 rounded-2xl">
          <h2 className="text-2xl font-bold py-3 inline-block border-b-2 border-black">
            {" "}
            Product Description
          </h2>
          <p className="text-md py-5">{singleVegetableData.description}</p>
        </article>
      </div>
    </div>
  );
};

export default VegetableDetails;
