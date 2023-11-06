import React, { useState, useEffect } from 'react';
import poster1 from "../assets/css/Poster (1).png"
import poster2 from "../assets/css/Poster (2).png"
import poster3 from "../assets/css/Poster (3).png"
import poster4 from "../assets/css/Poster (4).png"
import poster5 from "../assets/css/Poster (5).png"
import poster6 from "../assets/css/Poster (6).png"
import poster7 from "../assets/css/Poster (7).png"
import poster8 from "../assets/css/Poster (8).png"



const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {p: poster8, a: "https://api.whatsapp.com/send/?phone=%2B919600957373&text=How to claim this coupon?&type=phone_number&app_absent=0"},
    {p: poster1, a: "https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want to know more about this offer?&type=phone_number&app_absent=0"},
    {p: poster2, a: "https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want more information about Buy 1 Get 1 Android LED TV offer?&type=phone_number&app_absent=0"},
    {p: poster3, a: "https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want to know more METZ Google TV offer?&type=phone_number&app_absent=0"},
    {p: poster4, a: "https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want more information about Voltas beko offer?&type=phone_number&app_absent=0"},
    {p: poster5, a: "https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want to know more about REPOSE matress offer?&type=phone_number&app_absent=0"},
    {p: poster6, a: "https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want more information about RECLINER sofa set offer?&type=phone_number&app_absent=0"},
    {p: poster7, a: "https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want to know more about this mega offer?&type=phone_number&app_absent=0"}
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  }

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  }

  return (
    <div className="relative w-full">
      <div className='overflow-hidden'>
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <a href={image.a}>
            <img src={image.p} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
            </a>
          </div>
        ))}
      </div>
      <button onClick={handlePrev} className="absolute top-1/2 left-4 transform -translate-y-1/2 border-none bg-white w-10 text-black p-2 rounded-full opacity-75 hover:opacity-100 bg-white hidden md:block">
        &lt;
      </button>
      <button onClick={handleNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 border-none bg-white w-10 text-black p-2 rounded-full opacity-75 hover:opacity-100 bg-white hidden md:block">
        &gt;
      </button>
      <button onClick={handlePrev} className="absolute top-1/2 left-4 transform -translate-y-1/2 border-none bg-white w-10 text-black p-2 rounded-full opacity-75 hover:opacity-100 bg-white block md:hidden">
        &lt;
      </button>
      <button onClick={handleNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 border-none bg-white w-10 text-black p-2 rounded-full opacity-75 hover:opacity-100 bg-white block md:hidden">
        &gt;
      </button>
    </div>
    </div>
  );
}

export default Carousel;
