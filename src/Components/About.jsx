import SectionTitle from './SectionTitle'
import React from 'react'

const About = () => {
  return (
    <section className='bg-black py-20' id='about'>
        <div className='align-element grid md:grid-cols-2 items-center '>
            <article>
                <SectionTitle text='about me'/>
                <p className='text-slate-200 mt-8 leading-loose'>
                I'm a full-stack developer specializing in PHP for back-end development and JavaScript for front-end. My expertise includes working with JavaScript, PHP, frameworks like React and Slim, programming model such as OOP, technology stacks such as LAMP and MERN , RESTful API and MVC design pattern. Also worked with Node.js, MongoDB, MySQL and NOSQL , PHPUnit and Jest for testing. Experienced in working with HTML5 and CSS, Bootstrap and Tailwind for browser styling. Worked collaboratively in team environments, following Agile methodologies. Eager to contribute my knowledge to creating innovative websites and applications in the IT industry
                </p>
            </article>
        </div>
      
    </section>
  )
}

export default About
