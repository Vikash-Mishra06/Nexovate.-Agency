import React, { useEffect } from 'react'
import bgimg from '../assets/hero_bg.jpg'
import {projects} from '../export'
import AOS from 'aos'
import 'aos/dist/aos.css'
import backgroundImage from '../assets/hero_bg.jpg'

// import arrow_icon from '../assets/arrow_icon.svg'

const Portfolio = () => {
  useEffect(() => {
      AOS.init({
        duration: 800,
        delay: 200,
        once: false
      })
    }, [])
  
  return (
    <div id='projects' className="w-full h-auto flex flex-col items-center justify-center lg:px-[80px] px-[20px] lg:py-[80px] py-[60px] gap-[60px] bg-cover bg-center" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div data-aos="zoom-in" data-aos-delay="50" className='lg:w-[60%] w-full flex flex-col justify-center items-center gap-[10px] text-center'>
          <h1 className='text-themegreen uppercase text-md font-medium font-poppins'>OUR PORTFOLIO</h1>
          <h1 className='text-white lg:max-w-[80%] w-full lg:text-[45px] text-[30px] capitalize font-poppins leading-[1.2em]'>Explore Our Portfolio and Showcase Our Best Work</h1>
          <p  className='text-gray-300 text-sm font-poppins'>From strategy to execution, we craft digital solutions that move your business forward.</p>

          <div className=''>

          </div>
        </div>
    </div>
  )
}

export default Portfolio