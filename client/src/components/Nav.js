import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/css/logo.png'

const Nav = () => {
    return(
        <div>
           <div className='flex items-center justify-between p-2 bg-[#6d116b]'>
             <div className='flex items-center justify-center'>
               <Link to="/">
                    <img src={Logo} alt="logo" className='w-[90px]'/>
               </Link>
             </div>
               <div className='flex items-center justify-center gap-5 mr-4'>
                   <Link to="/">
                    <h1 className='font-semibold'>Home</h1></Link>
                   <Link to="/about">
                    <h1 className='font-semibold'>About</h1></Link>
                   <Link to="/branch">
                    <h1  className='font-semibold'>Branch</h1></Link>
                   <a href='tel:9865974107'>
                    <div className='bg-white text-[#6d116b] rounded-md p-4'>
                    <h1 className='font-semibold'>Call Now</h1>
                    </div>
                  </a>
               </div>
           </div>
        </div>
    );
}

export default Nav;