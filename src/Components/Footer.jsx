import React from 'react'
import { FaEnvelope, FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='flex flex-col md:flex-row justify-between items-center pb-2'>
      <div className='text-orange-500 px-2 pb-2 text-sm md:text-base'>
        /Developed by Cosmin Darius Sas/
      </div>
      <div className='text-orange-500 flex flex-col md:flex-row items-center space-x-0 md:space-x-2 space-y-2 md:space-y-0 px-3'> <span className='mr-2 text-base md:text-lg'>Let's connect!</span>
      <div className='flex space-x-2'>
        <a href='#'><FaGithubSquare className='h-8 w-8 text-slate-200 hover:text-orange-500 duration-300'/> </a>
        <a href='#'><FaLinkedin className='h-8 w-8 text-slate-200 hover:text-orange-500 duration-300'/></a>
        <a href='#'><FaEnvelope className='h-8 w-8 text-slate-200 hover:text-orange-500 duration-300'/></a>
      </div>
      </div>
    </section>
  )
}

export default Footer
