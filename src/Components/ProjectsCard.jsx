import React from 'react'
import { FaGithubSquare,FaLinkedin,FaEnvelope } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
const ProjectsCard = ({url,img,github,title,text}) => {
  return (
    <article className='bg-black rounded-lg shadow-md hover:shadow-xl duration-300 border border-zinc-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer shadow-zinc-400 hover:shadow-zinc-500'>
      <img src={img} alt={title} className='w-full max-h-48 object-cover rounded-t-lg'/>
      <div className='capitalize p-8'>
        <h2 className='text-xl tracking-wide font-medium text-orange-500'>{title}</h2>
        <p className='mt-4 text-slate-200 leading-loose'>{text}</p>
        <div className='mt-4 flex gap-x-4'>
          <a href={url}>
            <TbWorldWww className='h-8 w-8 text-slate-200 hover:text-orange-500 duration-300'/>
          </a>
          <a href={url}>
            <FaGithubSquare className='h-8 w-8 text-orange-500 hover:text-slate-200 duration-300'/>
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectsCard
