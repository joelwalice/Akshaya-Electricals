import React from 'react'
import HPage from "../assets/css/page-1.png"
import Pamp from "../assets/css/pamp1.png"

const Home = () => {
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
          <div className='grid grid-cols-1 sm:grid-cols-2 flex items-center justify-between p-4 gap-5 w-screen'>
            <div>

            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
