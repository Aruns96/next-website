"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Feature from './Features/Feature'
import Popular from './Popular/Popular'
import AOS, { init } from "aos";
import 'aos/dist/aos.css'

const Home = () => {
      useEffect(()=>{
        const intiAOS = async ()=>{
            await import('aos')
            AOS.init({
                duration:1000,
                easing:"ease",
                once:true,
                anchorPlacement:"top-center"
            })
        }
        intiAOS()
      }
      ,[])
  return (
    <div className='overflow-hidden'>
        <Hero />
        <Feature />
        <Popular />
    </div>
  )
}

export default Home