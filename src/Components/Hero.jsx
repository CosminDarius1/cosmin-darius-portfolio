import heroImg from '../assets/heroImg.jpg';
import { FaGithubSquare,FaLinkedin,FaEnvelope } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='bg-black py-24'>
            <div className= 'align-element grid sm:grid-cols-2 items-center gap-8'>
                <article className='md:block'>
                    <img src={heroImg} className='h-80 lg:h-96 rounded-full'/>
                </article>
                <article>
                    <h1 className='text-white text-7xl font-bold tracking-wider py-3'>
                       Hi <span className='text-orange-500'>I'm Cosmin</span>
                    </h1>
                    <h2 className='text-white text-4xl font-bold tracking-wider'>and I'm a <span className='text-orange-500'>Full Stack Developer</span></h2>
                    <div className='flex gap-x-4 mt-4'>
                        <a href='https://github.com/CosminDarius1'>
                            <FaGithubSquare className='h-10 w-10 text-slate-200 hover:text-orange-500 duration-300'/>
                        </a>
                        <a href='https://www.linkedin.com/in/cosmin-darius-sas-5458b91b4/'>
                            <FaLinkedin className='h-10 w-10 text-slate-200 hover:text-orange-500 duration-300'/>
                        </a>
                        <a href='mailto:cosmindariussas@gmail.com'>
                            <FaEnvelope className='h-10 w-10 text-slate-200 hover:text-orange-500 duration-300'/>
                        </a>
                        <a href='/cosminsascv.pdf' download class="bg-orange-500 hover:bg-slate-200 text-gray-800 font-bold  py-2 px-4 rounded inline-flex items-center">
                            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                            <span>Download CV</span>
                        </a>
                    </div>
                </article>
             
            </div>
        </div>
    )
}

export default Hero 