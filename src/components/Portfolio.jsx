import React, { useEffect } from 'react'
import bgimg from '../assets/hero_bg.jpg'
import { projects } from '../export'
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
    <div id='projects' className="w-full h-auto flex flex-col items-center justify-center lg:px-[80px] px-[20px] lg:py-[80px] py-[60px] gap-[30px] bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 data-aos="zoom-in" data-aos-delay="100" className='text-themegreen uppercase text-md font-medium font-poppins'>OUR PORTFOLIO</h1>
      <h1 data-aos="zoom-in" data-aos-delay="100" className='text-white w-full lg:text-[45px] text-[30px] capitalize font-poppins leading-[1.2em] text-center lg:w-[50%]'>Explore Our Portfolio and Showcase Our Best Work</h1>
      <p data-aos="zoom-in" data-aos-delay="100" className='text-gray-400 text-md font-medium font-poppins'>From strategy to execution, we craft digital solutions that move your business forward.</p>

      <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-10 mt-8">
        {projects.map((project, idx) => (
          <div data-aos="slide-up" data-aos-delay="50"
            key={idx}
            className="w-full flex flex-col bg-gray-700 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={project.img}
              className="w-full h-[250px] object-cover"
              alt={project.title}
            />
            <div className="p-8 flex flex-col gap-4">
              <h1 className="text-white lg:text-[30px] text-[22px] font-poppins leading-[1.2em]">
                {project.title}
              </h1>
              <p className="text-gray-300 text-md font-poppins">{project.para}</p>
              <div className="flex justify-start">
                <button className=" text-themegreen uppercase font-medium font-poppins hover:text-black/70">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio