import React, { useEffect } from 'react'
import { services } from '../export'
import AOS from 'aos'
import 'aos/dist/aos.css'
import arrow_icon from '../assets/arrow_icon.svg'


const Offer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false
    })
  }, [])

  return (
    <div id='services' className='w-full h-auto flex flex-col items-center justify-between lg:px-[80px] py-[60px] px-[20px] gap-[60px]'>
      <div data-aos="zoom-in" data-aos-delay="100" id='top-box' className='w-full flex lg:flex-row flex-col items-center justify-between gap-[40px]'>
        <div className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-[10px]'>
          <h1 className='text-themegreen uppercase text-md font-medium font-poppins'>OUR SERVICES</h1>
          <h1 className='text-black lg:text-[45px] text-[30px] capitalize font-poppins leading-[1.2em]'>Driving Digital Transformation with Excellence</h1>
          <p className='text-gray-500 text-sm font-poppins'>From strategy to execution, we craft digital solutions that move your business forward.</p>
        </div>
        <div data-aos="zoom-in" data-aos-delay="150" className='lg:w-[40%] w-full flex lg:justify-end justify-start items-center'>
          <button className='bg-themegreen hover:bg-black hover:text-white py-2 px-6 text-black text-md font-semibold rounded-md flex items-center gap-2'>
            LEARN MORE
            <img className='w-4' src={arrow_icon} alt="" />
          </button>
        </div>
        </div>

        <div  className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-6 mt-6'>
          {services.map((service, idx) => (
            <div data-aos="slide-up" data-aos-delay="100" key={idx} className='flex flex-col justify-center items-start gap-4 p-10 border-2 border-gray-200 bg-white hover:bg-green-100 rounded-md cursor-pointer'>
              <service.icon className='size-[35px] mb-5' />
              <h1 className='text-black text-[25px] capitalize font-poppins'>{service.title}</h1>
              <p className='text-gray-500 text-sm font-poppins'>{service.para}</p>
              <button className='text-themegreen uppercase font-medium font-poppins hover:text-black/70 pt-5'>Learn More</button>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Offer