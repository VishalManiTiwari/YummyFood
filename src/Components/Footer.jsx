import React from 'react'

const Footer = () => {
  return (
     <>
      <div className='w-full text-center bg-black text-white '>
        <div className='grid grid-cols-2 md:grid-cols-4 py-10 pl-6 '>
        <div>
           <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'>
           <p>Yumi<span className='text-[orange]'>Food</span></p>
           </h2>
           <p className='text-[15px] md:text-[20] text-[gray]'>© 2023 Bundl Technologies Pvt. Ltd</p>
        </div>
        <div>
           <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'>Company</h2>
           <p className='text-[15px] md:text-[20] mb-2 text-[gray]'>About</p>
           <p className='text-[15px] md:text-[20] mb-2 text-[gray]'>Career</p>
           <p className='text-[15px] md:text-[20] mb-2 text-[gray]'>Terms</p>
           <p className='text-[15px] md:text-[20] mb-2 text-[gray]'>Sweggy one</p>
        </div>
        <div>
           <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'>Contect us</h2>
           <p className='text-[15px] md:text-[20] mb-2 text-[gray]'>Help & Support</p>
           <p className='text-[15px] md:text-[20] mb-2 text-[gray]'>Partner with us</p>
           <p className='text-[15px] md:text-[20] mb-2 text-[gray]'>Ride with us</p>
        </div>
        <div>
           <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'>We deliver to:</h2>
           <p className='text-[15px] md:text-[20] mb-2 text-[gray]'>Bangalore</p>
           <p className='text-[15px] md:text-[20] mb-2 text-[gray]'>Gurgaon</p>
           <p className='text-[15px] md:text-[20] mb-2 text-[gray]'>Mumbai</p>
           <p className='text-[15px] md:text-[20] mb-2 text-[gray]'>Pune</p>
        </div>
        </div>
      </div>
    </> 
  )
}

export default Footer
