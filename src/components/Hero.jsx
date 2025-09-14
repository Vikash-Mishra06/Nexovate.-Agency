import React, { useEffect } from 'react'
import heroimg from '../assets/hero.png'
import bgimg from '../assets/hero_bg.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import arrow_icon from '../assets/arrow_icon.svg'
import { Link } from 'react-scroll'


const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false
    })
  }, [])
  return (
    <div id='home' className='w-full h-auto flex lg:flex-row flex-col justify-between items-center lg:px-[80px] px-[20px] lg:pt-[150px] pt-[120px] lg:pb-[80px] pb-[60px] lg:gap-[60px] gap-[40px] bg-cover bg-center ' style={{ backgroundImage: `url(${bgimg})` }}>
      <div className='lg:w-1/2 w-full flex flex-col gap-[20px] items-start justify-center'>
        <h1 data-aos="zoom-in" data-aos-delay="50" className='text-themegreen uppercase text-sm font-poppins'>Seamless It Services</h1>
        <h1 data-aos="zoom-in" data-aos-delay="100" className='text-white lg:text-[70px] text-[40px] capitalize font-poppins leading-[1.2em]'>Transforming ideas into Digital Success</h1>
        <p data-aos="zoom-in" data-aos-delay="150" className='text-gray-300 text-md font-poppins'>Creating meaningful connections and turning big ideas into interactive digital experiences.</p>
        <div className='lg:w-[40%] w-full flex lg:flex-row  justify-start items-center'>
          <Link to='services' data-aos="zoom-in" data-aos-delay="100" className='bg-themegreen hover:bg-white hover:text-black py-3 px-6 text-black text-md font-semibold rounded-md flex items-center gap-2'>
            EXPLORE SERVICES
          </Link>
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-delay="250" className='lg:w-1/2 w-full flex items-center justify-center '>
        <div className='lg:w-[80%] w-full flex items-center justify-center px-5 pt-5 bg-themegreen/30 z-10 rounded-md'>
          <div className='opacity-100'>
            <img src={heroimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero