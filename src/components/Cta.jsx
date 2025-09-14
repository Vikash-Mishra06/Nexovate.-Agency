import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import bgimg from '../assets/hero_bg.jpg'

const Cta = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false
    })
  }, [])

  return (
    <div id='contact' className='w-full h-auto flex flex-col items-center justify-center lg:px-[80px] px-[20px] lg:py-[80px] py-[40px] gap-[20px] bg-cover bg-center' style={{ backgroundImage: `url(${bgimg})` }}>
      <h1 data-aos="zoom-in" data-aos-delay="100" className='text-themegreen uppercase text-md font-poppins'>READY TO GET STARTED</h1>
      <h1 data-aos="zoom-in" data-aos-delay="100" className='text-white w-full lg:text-[45px] text-[30px] capitalize font-poppins leading-[1.2em] text-center lg:w-[50%]'>Let's Elevate Your Business With Us.</h1>
      <p data-aos="zoom-in" data-aos-delay="100" className='text-gray-400 text-md font-medium font-poppins'>From strategy to execution, we craft digital solutions that move your business forward.</p>

      <div id='two buttons' className='flex lg:flex-row flex-col justify-center items-center lg:gap-5 gap-1 mt-5'>
        <button data-aos="zoom-in" data-aos-delay="100" className='bg-themegreen hover:bg-white hover:text-black py-2 px-5 text-black text-md font-semibold mt-2 rounded-md '>CONTACT US NOW</button>
      </div>
    </div>
  )
}

export default Cta