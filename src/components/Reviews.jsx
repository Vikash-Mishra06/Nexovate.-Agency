import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {reviews} from '../export'
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  useEffect(() => {
      AOS.init({
        duration: 800,
        delay: 200,
        once: false
      })
    }, [])

  return (
    <div id='testimonials' className='w-full h-auto flex flex-col items-center justify-center lg:px-[80px] px-[20px] lg:py-[80px] py-[20px] gap-[20px]'>
      <h1 data-aos="zoom-in" data-aos-delay="100" className='text-themegreen text-md font-poppins font-medium'>CLIENT VOICES</h1>
      <h1 data-aos="zoom-in" data-aos-delay="100" className='text-black lg:text-[45px] text-[30px] capitalize font-poppins leading-[1.2em] text-center lg:w-[50%] w-full'>Stories of Success and Satisfaction</h1>
      <p data-aos="zoom-in" data-aos-delay="100" className='text-gray-600 text-md font-medium font-poppins text-center'>From strategy to execution, we craft digital solutions that move your business forward.</p>

      <div  className='w-full grid grid-cols-1 lg:grid-cols-4 justify-center items-center lg:gap-6 gap-4 mt-6'>
        {reviews.map((review, idx) => (
          <div data-aos="slide-up" data-aos-delay="100" key={idx} className='flex flex-col justify-center items-start gap-4 bg-gray-100 hover:bg-green-100 lg:py-12 py-5 lg:px-8 px-4 rounded-md cursor-pointer'>
            <button className='flex justify-center items-center gap-1 bg-white py-2 px-4 rounded-full'>{review.rating}<FaStar className='text-yellow-500' /> </button>
            <p className='text-gray-500 text-sm font-poppins text-left'>{review.about}</p>
            <div>
              <h1 className='text-themegreen text-md font-poppins text-left font-medium'>{review.name}</h1>
              <h1 className='text-gray-700 font-medium text-sm font-poppins text-left capitalize'>{review.role}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews