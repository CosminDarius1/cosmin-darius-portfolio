import SectionTitle from './SectionTitle'
import React from 'react'
import splashImg from '../assets/splashAbout.svg'

const About = () => {
  return (
    <section className='bg-black py-20' id='about'>
      <div>
        <article>
          <div className="align-element flex flex-wrap justify-between">
            <div className='w-1/2'>
            <h2 className="text-3xl font-medium tracking-wider capitalize text-orange-500 mb-4 border-b border-gray-200 pb-3">About me</h2>
            <p className='text-slate-200 text-lg mt-0 leading-loose border-gray-200 pt-0'>
              I am a passionate full-stack developer who is always looking to innovate and create meaningful solutions. I had the opportunity to develop my skills in languages like HTML, CSS, JavaScript, PHP, Typescript and MySQL at iO Academy, where I joined their award-winning bootcamp Full Stack Track Course. I also used frameworks like REACT and Slim to build projects by following Agile methodologies to work in a collaborative team environment. For a better glimpse of my work, please explore my projects below.
            </p>
            </div>
            <img src={splashImg} className='h-80 lg:h-96'/>
          </div>
        </article>
      </div>
    </section>
  )
}

export default About


