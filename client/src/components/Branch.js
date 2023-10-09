import React from 'react'
import home from '../assets/css/home.jpg'

const Branch = () => {
  return (
    <div>
      <h2 className='p-4 text-4xl md:text-5xl font-semibold flex items-center justify-center'>Our Branches</h2>
      <div className=' mt-4 p-4 grid grid-cols-1 sm:grid-cols-2 gap-2 items-center justify-center'>
      <div className='flex flex-col items-center justify-center relative'>
      <div className='opacity-0 bg-black/50 hover:opacity-100 w-[300px] h-[200px] absolute top-0 flex items-center justify-center my-auto gap-2 mx-auto'>
          <a><button className='p-3 border-0 bg-white text-[#5a116b] rounded-lg font-semibold'>Location</button></a>
          <a><button className='p-3 border-0 bg-white text-[#5a116b] rounded-lg font-semibold'>Call now</button></a>
          </div>
        <img className='rounded-lg w-[300px] h-[200px]' src={home} alt='Home' />        
        <h3 className='p-3 text-xl md:text-2xl font-semibold justify-center'>Akshaya Home Appliances</h3>
        <p className='text-md'>ldkhfvbdskvbsdvkjbdsvdbs j jhdvcasycvikhb</p>
        <a href='/'>
          <button className='mt-4 bg-white p-4 text-[#5a005b] font-semibold rounded-lg'>Explore Now</button>
        </a>
      </div>
      <div className='flex flex-col items-center justify-center relative'>
      <div className='opacity-0 bg-black/50 hover:opacity-100 w-[300px] h-[200px] absolute top-0 flex items-center justify-center my-auto gap-2 mx-auto'>
          <a>
            <button className='border-0'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256"
>
<g fill="#e2e1e2" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M28.292,1.326c-1.066,-0.21 -2.165,-0.326 -3.292,-0.326c-4.71,0 -8.98,1.93 -12.06,5.04l6.92,5.592zM18.595,13.178l-6.975,-5.628c-2.27,2.88 -3.62,6.52 -3.62,10.45c0,2.281 0.452,4.487 1.304,6.534zM22.608,11.432c0.745,-0.273 1.546,-0.432 2.392,-0.432c3.87,0 7,3.13 7,7c0,0.338 -0.032,0.667 -0.078,0.992l7.772,-9.499c-2.058,-3.539 -5.348,-6.268 -9.285,-7.595zM27.341,24.591c-0.733,0.26 -1.519,0.409 -2.341,0.409c-3.87,0 -7,-3.13 -7,-7c0,-0.354 0.034,-0.7 0.084,-1.039l-7.803,9.537c0.386,0.666 0.809,1.315 1.289,1.932c0.37,0.5 0.87,1.14 1.45,1.89c1.267,1.633 2.959,3.816 4.59,6.164zM18.778,38.215c2.082,3.184 3.852,6.497 4.172,9.055c0.14,0.99 0.99,1.73 1.99,1.73c1.02,0 1.87,-0.75 1.99,-1.75c0.61,-4.83 6.57,-12.48 9.78,-16.6c0.56,-0.72 1.05,-1.35 1.5,-1.94c2.44,-3.02 3.79,-6.82 3.79,-10.71c0,-2.322 -0.471,-4.536 -1.319,-6.555z"></path></g></g>
</svg>
            </button>
          </a>
          <a><button className='p-3 border-0 bg-white text-[#5a116b] rounded-lg font-semibold'>Call now</button></a>
          </div>
        <img className='rounded-lg w-[300px] h-[200px]' src={home} alt='Home' />
        <h3 className='p-3 text-xl md:text-2xl font-semibold justify-center'>Akshaya Electronics</h3>
        <p className='text-md'>ldkhfvbdskvbsdvkjbdsvdbs j jhdvcasycvikhb</p>
        <a href='/'>
          <button className='mt-4 bg-white p-4 text-[#5a005b] font-semibold rounded-lg'>Explore Now</button>
        </a>
      </div>
      
      </div>
    </div>
  )
}

export default Branch;