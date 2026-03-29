import React from "react";
import VegetableSlider from "../Components/VegetableSlider";
import CommonComponent from "../Components/CommonComponent";

const Vegetable = () => {
  return (
    <div>
      <VegetableSlider />

     <CommonComponent/>


      <h1 className="text-3xl text-center font-bold font-mono">Best Sellers</h1>


      <div className="max-w-7xl mx-auto bg-[#f3f2ed] flex justify-between p-10 rounded-lg mt-10">

        <img src="https://kola.wpbingosite.com/wp-content/uploads/2018/10/brand1.png" alt="" className="object-fill"/>
        <img src="https://kola.wpbingosite.com/wp-content/uploads/2018/10/brand2.png" alt="" className="object-fill"/>
        <img src="https://kola.wpbingosite.com/wp-content/uploads/2018/10/brand3.png" alt="" className="object-fill"/>
        <img src="https://kola.wpbingosite.com/wp-content/uploads/2018/10/brand1.png" alt="" className="object-fill"/>
        <img src="https://kola.wpbingosite.com/wp-content/uploads/2018/10/brand4.png" alt="" className="object-fill"/>
        <img src="https://kola.wpbingosite.com/wp-content/uploads/2018/10/brand5.png" alt="" className="object-fill"/>
      </div>

    </div>
  );
};

export default Vegetable;
