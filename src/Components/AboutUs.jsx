import React from 'react';

const AboutUs = () => {
  return (
    <div className='text-gray-600 body-font w-[80%] max-auto mx-auto'>
      <div className='px-[16px]'>
        <h2 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mt-8'>
          Driving the force of <span className='text-[#fbc531]'>assortment</span> 
        </h2>
        <p className='mb-8 leading-relaxed text-[200]'>
          For over a decade now, we’ve been empowering our customers in
          discovering new tastes and experiences across countries. By putting 
          together meticulous information for our customers, we enable them to
          make an informed choice
        </p>
      </div>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start 
        md:text-left mb-16 md:mb-0 items-center text-center'>
          <h2 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            Who are we?  
          </h2>
          <p className='mb-8 leading-relaxed'>
            Launched in 2010, Our technology platform 
            connects customers, restaurant partners and 
            delivery partners, serving their multiple needs.
            Customers use our platform to search and 
            discover restaurants, read and write customer 
            generated reviews and view and upload photos,
            order food delivery, book a table and make
            payments while dining-out at restaurants. 
          </p>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <img
            className='oblect-cover object-center rounded'
            src="https://b.zmtcdn.com/web/about/a7b0a36d5107f3590895981dab2eeac31563208212.jpeg?output-format=webp" 
            alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
