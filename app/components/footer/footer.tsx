import React from 'react'
import { CiGlass } from 'react-icons/ci'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-gray-900 '>
         <div className='w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50
         mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem] items-start'>
              <div>
              <div className="flex items-center text-white space-x-2">
                  <CiGlass className='w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-500'/>
                  <h1 className='text-[20px] sm:text-[30px] font-semibold'>ചായ കട</h1>
               </div>
               <p className='text-white text-opacity-60 mt-[0.4rem]'>Best Chaya Kada Ever </p>
              <p className='mt-[1rem] text-white '>arun509577@gmail.com</p> 
              <p className='text-red-300 text-[19px] font-bold'>+91-9526833815</p>
              </div>

              <div>
                <h1 className='text-white text-[23px] font-semibold mb-[2rem]'>Products</h1>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                duration-200 cursor-pointer w-fit '>Chaya</p>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                duration-200 cursor-pointer w-fit '>Katan</p>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                duration-200 cursor-pointer w-fit '>vada</p>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                duration-200 cursor-pointer w-fit '>roll</p>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                duration-200 cursor-pointer w-fit '>pazhampori</p>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                duration-200 cursor-pointer w-fit '>parip vada</p>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                duration-200 cursor-pointer w-fit '>samoosa</p>
              </div>


              <div>
                <h1 className='text-white text-[23px] font-semibold mb-[2rem]'>Qucik Links</h1>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                duration-200 cursor-pointer w-fit '>Home</p>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                duration-200 cursor-pointer w-fit '>About</p>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                duration-200 cursor-pointer w-fit '>Menu</p>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                duration-200 cursor-pointer w-fit '>Products</p>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                duration-200 cursor-pointer w-fit '>Content</p>
                
              </div>
              

              <div>
              <h1 className='text-white text-[23px] font-semibold mb-[2rem]'>Opening Hours</h1>
              <p className='text-white text-[18px]'>Monday - Friday <span className='text-yellow-500'>3pm-12pm</span></p>
              <p className='text-white text-[18px]'>Saturday <span className='text-yellow-500'>6pm-12pm</span></p>

              <div className='flex mt-[2rem] items-center space-x-6'>
                <FaFacebook className='w-[1.5rem] h-[1.5rem] text-blue-400' />
                <FaInstagram className='w-[1.5rem] h-[1.5rem] text-red-400' />
                <FaTwitter className='w-[1.5rem] h-[1.5rem] text-blue-300' />
              </div>
              </div>
                    
         </div>
             <p className='text-white text-center opacity-50 mt-[1.5rem]'>Copyright © 2024
                 <span className='text-yellow-300'> Arun.</span> All rights reserved.</p>
    </div>
  )
}

export default footer