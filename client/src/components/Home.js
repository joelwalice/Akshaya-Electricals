import React, { useState } from 'react'
import HPage from "../assets/css/page-1.png"
import Pamp from "../assets/css/pamp1.png"
import p2 from "../assets/css/pamp2.jpg"
import p3 from "../assets/css/pamp3.jpg"
import p4 from "../assets/css/pamp4.jpg"
import p5 from "../assets/css/pamp5.jpg"
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    p2,
    p3,
    p4,
    p5
  ]
  const cards = [1, 1, 1, 1]

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + cards.length) % cards.length;
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % cards.length;
    setCurrentSlide(newIndex);
  };
  return (
    <>
      <div className='flex flex-col items-center justify-center gap-10'>
        <img src={HPage} alt="Home Page" className='w-screen' />
        <div className='grid grid-cols-1 sm:grid-cols-2 flex items-center justify-between p-4 gap-5 w-screen'>
          <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B919600957373&text=How to claim the Diwali's Lucky Draw Coupon? &type=phone_number&app_absent=0">
            <img src={Pamp} alt="/" className='rounded-lg md:m-6 shadow-gray-700 shadow-lg' />
          </a>
          <div className='flex flex-col items-center p-8 w-full'>
            <h1 className='hidden md:flex text-4xl font-semibold space-between leading-[50px] justify-center '>
              Get a chance to win a  lucky draw contest by grabbing coupon when you purchase products worth ₹10,000 or more this Diwali and receive surprise gifts.
            </h1>
            <h1 className='flex md:hidden text-2xl font-semibold space-between justify-center '>
              Get a chance to win a  lucky draw contest by grabbing coupon when you purchase products worth ₹10,000 or more this Diwali and receive surprise gifts.
            </h1>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 flex items-center justify-between gap-5 w-screen'>
            <div>

            </div>
            <div>
              <div className='p-4 rounded-lg shadow-lg gap-4 overflow-x-auto'>
                <div className='flex items-center '>
                  <div className="max-w-full h-[800px] w-full m-auto py-16 px-4 relative group">
                    <div
                      style={{ backgroundImage: `url(${images[currentSlide % images.length]})` }}
                      className=" image relative w-full h-full rounded-2xl bg-center bg-cover duration-500"
                    >
                      <div className="details absolute bottom-0 w-full h-full grid place-items-center flex items-center justify-center">
                        {cards.map((card, cardIndex) => (
                          <div
                            key={cardIndex}
                            className={`${currentSlide === cardIndex ? 'block' : 'hidden'
                              } p-5 border-0 rounded-lg`}
                          >
                            <h2 className="text-[22px] font-bold text-white">{card.title}</h2>
                            <p className="mt-2 text-md text-white">{card.details}</p>
      
                          </div>
                        ))}
                      </div>
                      <div
                        className={`hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer`}
                      >
                        <BsChevronLeft onClick={prevSlide} size={20} />
                      </div>
                      <div
                        className={`hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer`}
                      >
                        <BsChevronRight onClick={nextSlide} size={20} />
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
