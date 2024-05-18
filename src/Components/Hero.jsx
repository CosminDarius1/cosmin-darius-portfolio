import React, { useEffect, useState } from 'react';
import heroImg from '../assets/heroImg.jpg';
import { FaGithubSquare, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Spinner from './Spinner';

const Hero = () => {
    const [loaded, setLoaded] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        if (imageLoaded) {
            setLoaded(true);
        }
    }, [imageLoaded]);

    return (
        <div className='bg-black py-24'>
            {!loaded && (
                <div className="fixed inset-0 flex items-center justify-center bg-black">
                    <Spinner />
                </div>
            )}
            <div className={`align-element grid sm:grid-cols-2 items-center gap-8 ${loaded ? '' : 'hidden'}`}>
                <article className={`md:block ${loaded ? 'animate-fadeIn' : 'opacity-0'}`}>
                    <img
                        src={heroImg}
                        alt="Hero"
                        className='h-80 lg:h-96 rounded-full'
                        onLoad={() => setImageLoaded(true)}
                        style={{ display: imageLoaded ? 'block' : 'none' }}
                    />
                </article>
                <article className={`${loaded ? 'animate-fadeIn' : 'opacity-0'}`}>
                    <h1 className='text-white text-4xl md:text-7xl font-bold tracking-wider py-3'>
                        Hi <span className='text-orange-500'>I'm Cosmin</span>
                    </h1>
                    <h2 className='text-white text-2xl md:text-4xl font-bold tracking-wider'>
                        and I'm a <span className='text-orange-500'>Full Stack Developer</span>
                    </h2>
                    <div className='flex flex-col md:flex-row gap-4 mt-4'>
                        <div className='flex justify-center md:justify-start gap-x-4'>
                            <a href='https://github.com/CosminDarius1'>
                                <FaGithubSquare className='h-10 w-10 text-slate-200 hover:text-orange-500 duration-300' />
                            </a>
                            <a href='https://www.linkedin.com/in/cosmin-darius-sas-5458b91b4/'>
                                <FaLinkedin className='h-10 w-10 text-slate-200 hover:text-orange-500 duration-300' />
                            </a>
                            <a href='mailto:cosmindariussas@gmail.com'>
                                <FaEnvelope className='h-10 w-10 text-slate-200 hover:text-orange-500 duration-300' />
                            </a>
                        </div>
                        <a href='/cosmindariussas.pdf' download className="bg-orange-500 hover:bg-slate-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center justify-center">
                            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                            <span>Download CV</span>
                        </a>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default Hero;
