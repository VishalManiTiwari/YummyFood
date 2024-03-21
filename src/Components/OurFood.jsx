import React from 'react'
import { mealData } from './Data/data'

const OurFood = () => {
  return (
    <>
      <div className='w-[90%] mx-auto'>
        <h2 className='text-center text-[25px] text-[#fbc531] font-bold py-5'>
         Our Food
        </h2>
      </div>
         <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 py-6 gap-2'>
        {
            mealData.map((meal)=>(
                <div className='flex justify-center flex-col flex items-center'>
                    <div className=''>
                    <img src={meal.image} alt="" className='w-[250px] h-[200px] object-cover rounded-lg' />
                    </div>
                    <div className='flex justify-center py-2 px-4 flex-col items-center'>
                    <p className='text-xl font-semibold uppercase'>{meal.name}</p> 
                    <p className='text-xl font-semibold uppercase'>{meal.price}</p>
                    <button className='bg-black w-[120px] text-white
                     rounded-md my-6 
                     py-[15px] text-[15px] hover:text-[#fbc531]
                     font-semibold '>
              Add to cart</button>
                </div>
                </div>
            ))
        }
        
      </div>
    </>
  )
}

export default OurFood
