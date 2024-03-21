import React from 'react';

const SignIn = () => {
  return (
    <center>
      <div className=' flex py-8 text-gray body-font w-[90%] sm:w-[80%] mx-auto'>
        <div className='container px-5 py-24 mx-auto flex-wrap items-center'>
          <h1 className='title-font font-medium text-3xl text-gray-900'>
            Get Started with your Account
          </h1>
          <p className='leading-relaxed mt-4'>
            Find Your Favorite Food On our platform. Just one step to order your Food
          </p>
        </div>
        <div className='lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
          <h2 className='text-gray-900 text-lg font-medium title-font mb-5'>
            Sign Up
          </h2>
          <div className='relative mb-4'>
            <label className='leading-7 text-sm text-gray-600' htmlFor="full-name">
              Full Name
            </label>
            <input 
              className='w-full bg-white rounded border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
               outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              type="text" 
              id='full-name' 
              name='full-name' />
          </div>
          <div className='relative mb-4'>
            <label className='leading-7 text-sm text-gray-600' htmlFor="mobile">
              Mobile
            </label>
            <input 
              className='w-full bg-white rounded border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
               outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              type="tel" 
              id='mobile' 
              name='mobile' />
          </div>
          <div className='relative mb-4'>
            <label className='leading-7 text-sm text-gray-600' htmlFor="email">
              Email
            </label>
            <input 
              className='w-full bg-white rounded border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
               outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              type="email" 
              id='email' 
              name='email' />
          </div>
          <div className='relative mb-4'>
            <label className='leading-7 text-sm text-gray-600' htmlFor="password">
              Password
            </label>
            <input 
              className='w-full bg-white rounded border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
               outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              type="password" 
              id='password' 
              name='password' />
          </div>
          <button className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
              Sign Up
            </button>
        </div>
      </div>
    </center>
  )
}

export default SignIn;
