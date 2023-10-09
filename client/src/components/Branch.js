import React from 'react'
import home from '../assets/css/home.jpg'
import electronics from '../assets/css/electronics.jpg'

const Branch = () => {
  return (
    <div>
      <h2 className='p-4 text-4xl md:text-5xl font-semibold flex items-center justify-center'>Our Branches</h2>
      <div className=' mt-4 p-4 grid grid-cols-1 sm:grid-cols-2 gap-[100px] items-center justify-center mb-10'>
        <div className='flex flex-col items-center justify-center relative'>
          <div className='opacity-0 bg-black/50 rounded-lg hover:opacity-100 w-[300px] h-[200px] absolute top-0 flex items-center justify-center my-auto gap-2 mx-auto'>
            <a href='https://maps.app.goo.gl/p8vSm4RqMfZzFzJQA' target='_blank'><button className='border-1 bg-white p-2 border-white text-[#5a116b] rounded-lg font-semibold'>
              <img width="43" height="43" src="https://img.icons8.com/ios-filled/100/5a116b/marker.png" alt="marker" />
            </button></a>
            <a href='tel:7708715107'><button className='p-3 border-0 bg-white p-2 text-[#5a116b] rounded-lg font-semibold'>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#5a116b" class="bi bi-telephone-fill" viewBox="0 0 16 16" >
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
            </button></a>
          </div>
          <img className='rounded-lg w-[300px] h-[200px]' src={home} alt='Home' />
          <h3 className='p-3 text-xl md:text-2xl font-semibold justify-center'>Akshaya Home Appliances</h3>
          <p className='text-md'>ldkhfvbdskvbsdvkjbdsvdbs j jhdvcasycvikhb</p>
          <a href='/'>
            <button className='mt-4 bg-white p-4 text-[#5a005b] font-semibold rounded-lg'>Explore Now &gt;</button>
          </a>
        </div>
        <div className='flex flex-col items-center justify-center relative'>
          <div className='opacity-0 rounded-lg bg-black/50 hover:opacity-100 w-[300px] h-[200px] absolute top-0 flex items-center justify-center my-auto gap-2 mx-auto'>
            <a href='https://maps.app.goo.gl/p8vSm4RqMfZzFzJQA' target='_blank'>
              <button className='border-1 bg-white p-2 border-white text-[#5a116b] rounded-lg font-semibold'>
                <img width="43" height="43" src="https://img.icons8.com/ios-filled/100/5a116b/marker.png" alt="marker" />
              </button>
            </a>
            <a href='tel:9597589194'><button className='p-3 border-0 bg-white p-2 text-[#5a116b] rounded-lg font-semibold'>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#5a116b" class="bi bi-telephone-fill" viewBox="0 0 16 16" >
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
            </button></a>
          </div>
          <img className='rounded-lg w-[300px] h-[200px]' src={electronics} alt='Home' />
          <h3 className='p-3 text-xl md:text-2xl font-semibold justify-center'>Akshaya Electronics</h3>
          <p className='text-md'>ldkhfvbdskvbsdvkjbdsvdbs j jhdvcasycvikhb</p>
          <a href='/'>
            <button className='mt-4 bg-white p-4 text-[#5a005b] font-semibold rounded-lg'>Explore Now &gt;</button>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Branch;