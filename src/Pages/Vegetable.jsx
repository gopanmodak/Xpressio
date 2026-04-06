import React, { useContext } from "react";
import VegetableSlider from "../Components/VegetableSlider";
import CommonComponent from "../Components/CommonComponent";
import { ContextProvider } from "../AuthProvider/AuthProvider";
import VegetablePage from "../Components/VegetablePage";

const Vegetable = () => {
  const { vegetable } = useContext(ContextProvider);
  return (
    <div>
      <VegetableSlider />
      <CommonComponent />

      <h1 className="text-3xl text-center font-bold font-mono">Best Sellers</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10 p-3">
        
        {vegetable.map((item) => (
          <VegetablePage key={item.productId} item={item} />
        ))}
      </div>
      <div className="max-w-7xl mx-auto bg-[#f3f2ed] flex justify-between p-10 rounded-lg my-10">
        <img
          src="https://kola.wpbingosite.com/wp-content/uploads/2018/10/brand1.png"
          alt=""
          className="object-fill"
        />
        <img
          src="https://kola.wpbingosite.com/wp-content/uploads/2018/10/brand2.png"
          alt=""
          className="object-fill"
        />
        <img
          src="https://kola.wpbingosite.com/wp-content/uploads/2018/10/brand3.png"
          alt=""
          className="object-fill"
        />
        <img
          src="https://kola.wpbingosite.com/wp-content/uploads/2018/10/brand1.png"
          alt=""
          className="object-fill"
        />
        <img
          src="https://kola.wpbingosite.com/wp-content/uploads/2018/10/brand4.png"
          alt=""
          className="object-fill"
        />
        <img
          src="https://kola.wpbingosite.com/wp-content/uploads/2018/10/brand5.png"
          alt=""
          className="object-fill"
        />
      </div>
    </div>
  );
};

export default Vegetable;
