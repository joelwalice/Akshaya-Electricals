import React, { useState } from 'react'
import home from '../assets/css/home.jpg'
import founder from '../assets/css/founder.jpg'
import bni from '../assets/css/bni_logo.png'

const About = () => {
  const [more, setMore] = useState(false)
  const [less, setLess] = useState(true)
  return (
    <div>
      <div className='p-4 m-4 mb-auto'>
        <h1 className='text-4xl md:text-5xl font-semibold'>About us</h1>
        <div className='hidden md:block'>
          <p className='p-4 mt-4  mt-[30px] leading-[22px]'>Akshaya Home Appliances & Electronics stands as a beacon of trust and reliability in the heart of Sathyamangalam. With an impressive legacy of 23 years in the industry, we have consistently delivered excellence in the realm of electronic and home appliances. Our commitment to quality has garnered the loyalty of over 5000 satisfied customers across Tamilnadu. We take immense pride in being your go-to destination for all your electronic and home appliance needs. At Akshaya, we don't just sell products; we provide solutions that enhance your everyday life. Join our ever-growing family of happy customers and experience the Akshaya difference today. Your satisfaction is our priority, and we look forward to serving you with the utmost dedication and expertise. At Akshaya Home Appliances & Electronics, we offer a wide range of products, including refrigerators, washing machines, air conditioners, televisions, kitchen appliances, and more. Our goal is to be your one-stop shop for all your home appliance needs. We aim to make your shopping experience easy and provide you with quality products to improve your home and life. We are proud to serve a growing community of over 5000 delighted customers in Sathyamangalam and Thalavadi. Your trust and satisfaction are the pillars of our success, and we remain committed to providing top-notch products and services to enhance your daily life.</p>

        </div>
        <div className='md:hidden'>
          <p className='p-4 mt-4  mt-[30px] leading-[22px]'>Akshaya Home Appliances & Electronics stands as a beacon of trust and reliability in the heart of Sathyamangalam. With an impressive legacy of 23 years in the industry, we have consistently delivered excellence in the realm of electronic and home appliances. Our commitment to quality has garnered the loyalty of over 5000 satisfied customers across Tamilnadu. <button className={more && !less ? 'hidden' : 'border-0 p-0 text-blue-400'} onClick={() => {setMore(!more); setLess(!less)}}>Read more...</button></p> <p className={more && !less ? 'px-4 leading-[22px]' : 'hidden'}>We take immense pride in being your go-to destination for all your electronic and home appliance needs. At Akshaya, we don't just sell products; we provide solutions that enhance your everyday life. Join our ever-growing family of happy customers and experience the Akshaya difference today. Your satisfaction is our priority, and we look forward to serving you with the utmost dedication and expertise. At Akshaya Home Appliances & Electronics, we offer a wide range of products, including refrigerators, washing machines, air conditioners, televisions, kitchen appliances, and more. Our goal is to be your one-stop shop for all your home appliance needs. We aim to make your shopping experience easy and provide you with quality products to improve your home and life. We are proud to serve a growing community of over 5000 delighted customers in Sathyamangalam and Thalavadi. Your trust and satisfaction are the pillars of our success, and we remain committed to providing top-notch products and services to enhance your daily life. <button className={!more || less ? 'hidden' : 'border-0 p-0 text-blue-400'} onClick={() => {setMore(!more); setLess(!less);}}> Read less...</button></p>
        </div>
        <h2 className='mt-[30px] text-3xl'><b>Meet our Founder</b></h2>
        <div className='mt-[30px] grid-cols-1 flex flex-col justify-center gap-5 md:flex-row md:items-center'>
          <img src={founder} alt='Founder' className='rounded-lg shadow-lg shadow-black transform -scale-x-100 mb-[20px]' width={200} height={200} />
          <p className='mb-[20px]'>Mr. Krishna Moorthi A, the humble Founder and Managing Director of Akshaya Home Appliances, embarked on his entrepreneurial journey 23 years ago. From his beginnings in audio recording during the 1980s-90s, he transitioned into CD cassettes, eventually leading to the thriving home appliances business we know today. Hailing from a modest background in Sathyamangalam, he's not only risen to success but now boasts an impressive annual turnover of 5 crore. With over 5000 loyal and trustworthy consumers, his remarkable journey is an inspiration to us all.</p>
        </div>
        <div className='my-[30px] grid-cols-1 flex flex-col justify-center gap-5 md:flex-row md:items-center'>
          <div>
            <img src={bni} alt='BNI Logo' width={250} height={250} className='block mb-[20px] md:hidden' />
            <p><b>At Akshaya Home Appliances, we are honored to be part of the esteemed BNI Landmark Chapter located in Sathyamangalam. This membership reflects our dedication to networking, growth, and excellence in serving our valued customers.</b>
            </p>
          </div>
          <img src={bni} alt='BNI Logo' width={250} height={250} className='hidden md:block' />
        </div>
      </div>
    </div>
  )
}

export default About;