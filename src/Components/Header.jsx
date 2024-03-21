import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';


const Header = () => {
  const [sideNav, setSideNav] = useState('');
  const [count, setCount] = useState(0);


  return (
    <div className='sticky top-0 z-10'>
    <div className='flex  shadow-md justify-between py-[20px] px-[25px] text-[18] font-semibold border-b relative'>
       <div className='text-[20px]'>
        <Link to='/'>
        <p className='cursor-pointer'>Yumi<span className='text-[orange]'>Food</span></p>
        </Link>
       </div>
       <div className=''>
        <ul className='md:flex gap-12 hidden cursor-pointer '>
           <Link to='/'>
            <li className='hover:text-[orange]'>Home</li>
           </Link>
           <Link to='/aboutus'>
            <li className='hover:text-[orange]'>About Us</li>
           </Link>
           <Link to='/ourfood'>
            <li className='hover:text-[orange]'>Our Foods</li>
           </Link>
           <Link to='/signin'>
             <li className='hover:text-[orange]' >Sign IN</li>
           </Link>
        </ul>
       </div>

       {sideNav?
       <div className='bg-[#f5f6fa] w-[300px] absolute top-0 right-0 text-center h-[100vh] flex items-center justify-center'>
          <RxCross2  
          onClick={() => setSideNav(!sideNav)}
          className='absolute top-3 right-3 cursor-pointer'/>
          <ul className='flex gap-12 cursor-pointer flex-col'>
          <Link to='/'>
            <li className='hover:text-[orange]' onClick={() => setSideNav(!sideNav)}>Home</li>
           </Link>
           <Link to='/aboutus'>
            <li className='hover:text-[orange]' onClick={() => setSideNav(!sideNav)}>About Us</li>
           </Link>
           <Link to='/ourfood'>
            <li className='hover:text-[orange]'onClick={() => setSideNav(!sideNav)}>Our Foods</li>
           </Link>
           <Link to='/signin'>
             <li className='hover:text-[orange]' onClick={() => setSideNav(!sideNav)} >Sign IN</li>
           </Link>
         </ul>
       </div>:''}

       <div className='flex gap-5'>
        <p><GiHamburgerMenu size={30} 
        onClick={() => setSideNav(!sideNav)}
        className='cursor-pointer block sm:hidden' /></p>
        <p>
          {count}
          <FaShoppingCart size={30} className='cursor-pointer' />
        </p>
       </div>
    </div>
    </div>
  )
}

export default Header



