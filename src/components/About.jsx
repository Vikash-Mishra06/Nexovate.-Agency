import React, { useEffect } from 'react'
import aboutimg from '../assets/about.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import arrow_icon from '../assets/arrow_icon.svg'
import { Link } from 'react-scroll'


const About = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false
    })
  }, [])
  return (
    <div id='about' className='w-full h-auto flex flex-col items-center justify-between lg:px-[80px] lg:py-[80px] py-[65px] px-[20px] gap-[60px]'>
      <div id='top-box' className='w-full flex lg:flex-row flex-col items-center justify-between gap-[40px]'>
        <div data-aos="zoom-in" data-aos-delay="100" className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-[10px]'>
          <h1 className='text-themegreen uppercase text-md font-medium font-poppins'>Who We Are</h1>
          <h1 className='text-black lg:text-[45px] text-[30px] capitalize font-poppins leading-[1.2em]'>Turning imagination into Digital impact</h1>
          <p className='text-gray-500 text-sm font-poppins'>From strategy to execution, we craft digital solutions that move your business forward.</p>
        </div>
        <div data-aos="zoom-in" data-aos-delay="150" className='lg:w-[40%] w-full flex lg:justify-end justify-start items-center'>
          <Link to='projects' className='bg-themegreen hover:bg-black hover:text-white py-2 px-6 text-black text-md font-semibold rounded-md flex items-center gap-2'>
            LEARN MORE
            <img className='w-4' src={arrow_icon} alt="" />
          </Link>
        </div>
      </div>

      <div id='bottom-box' className='w-full flex lg:flex-row flex-col justify-between items-center gap-[80px]'>
        <div data-aos="zoom-in" data-aos-delay="50" id='img-box' className='lg:w-[40%] w-full'>
          <img src={aboutimg} alt="" className='w-full bg-cover bg-center rounded-md' />
        </div>
        <div id='content-box' className='lg:w-[60%] w-full flex flex-col items-start justify-between gap-[40px]'>
          <div data-aos="slide-up" data-aos-delay="50" className='flex flex-col items-start justify-center gap-[5px]'>
            <h1 className='text-black text-[35px] capitalize font-poppins pb-3 leading-[1.2em]'>Advertising</h1>
            <p className='text-gray-500 text-md font-poppins'>We turn bold ideas into powerful digital solutions that connect, engage.</p>
          </div>
          <div data-aos="slide-up" data-aos-delay="50" className='flex flex-col items-start justify-center gap-[5px]'>
            <h1 className='text-black text-[35px] capitalize font-poppins pb-3 leading-[1.2em]'>Content marketing</h1>
            <p className='text-gray-500 text-md font-poppins'>We help you execute your plan and deliver results.</p>
          </div>
          
          <div data-aos="slide-up" data-aos-delay="50" className='flex flex-col items-start justify-center gap-[5px]'>
            <h1 className='text-black text-[35px] capitalize font-poppins pb-3 leading-[1.2em]'>Content Writing</h1>
            <p className='text-gray-500 text-md font-poppins'>We you create a marketing strategy that drives results.</p>
          </div>

          <div data-aos="slide-up" data-aos-delay="50" className='flex flex-col items-start justify-center gap-[5px]'>
            <h1 className='text-black text-[35px] capitalize font-poppins pb-3 leading-[1.2em]'>Social media</h1>
            <p className='text-gray-500 text-md font-poppins'>We turn bold ideas into powerful digital solutions that connect, engage.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About