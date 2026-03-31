import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner1 from "../assets/banner-1.webp";
import banner2 from "../assets/banner-2.webp";
import banner3 from "../assets/banner-3.webp";
import banner4 from "../assets/banner-4.webp";
import banner5 from "../assets/banner-5.webp";
import banner6 from "../assets/banner-6.webp";
import banner7 from "../assets/banner-7.webp";

const Slider = () => {
  const slides = [
    {
      image:
        "https://www.onestopsolution.com.bd/image/cache/catalog/website/slider/GPU%20ramadan.jpg-2560x860h.jpeg.webp",
    },
    {
      image:
        "https://www.onestopsolution.com.bd/image/cache/catalog/website/slider/OFFER%20BANNER-1-2560x860h.jpg.webp",
    },
    {
      image:
        "https://kola.wpbingosite.com/wp-content/uploads/2018/12/imgslide22.png",
    },
    { image: banner1 },
    { image: banner2 },
    { image: banner3 },
    { image: banner4 },
    { image: banner5 },
    { image: banner6 },
    { image: banner7 },
  ];

  return (
    <div className="max-w-360 mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-63 md:h-90 lg:h-120">
            {/* Image */}
            <img
              src={slide.image}
              alt="Slider Image"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
