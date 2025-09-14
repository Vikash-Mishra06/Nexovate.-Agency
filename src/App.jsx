import React, { useEffect, useRef } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Clients from './components/Clients'
import Offer from './components/Offer'
import Portfolio from './components/Portfolio'
import Reviews from './components/Reviews'
import Cta from './components/Cta'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  // Refs for custom cursor position tracking
  const mouse = useRef({ x: 0, y: 0 })
  const position = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }
    document.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`
        outlineRef.current.style.transform = `translate3d(${mouse.current.x - 20}px, ${mouse.current.y - 20}px, 0)`
      }
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  })

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Clients />
      <Offer />
      <Portfolio />
      <Reviews />
      <Cta />
      <Footer />
      {/* Custom Cursor ring */}
      <div ref={outlineRef} className='hidden lg:block fixed top-0 left-0 h-10 w-10 rounded-full border border-themegreen pointer-events-none z-[9999]'
        style={{ transition: 'transform 0.1s ease-out' }}
      ></div>
      {/* Custom Cursor dot */}
      <div ref={dotRef} className='hidden lg:block fixed top-0 left-0 h-3 w-3 rounded-full bg-themegreen pointer-events-none z-[9999]'></div>
    </>
  )
}

export default App