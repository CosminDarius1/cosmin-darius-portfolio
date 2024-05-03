import React, { useState } from 'react'
import { FaGithubSquare,FaLinkedin,FaEnvelope } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
const ProjectsCard = ({url,img,gitUrl,title,text,text2,text3,text4,text5,text6}) => {
  const [showDetails,setShowDetails] = useState(false)
  return (
    <article className='bg-black rounded-lg shadow-md hover:shadow-xl duration-300 border border-zinc-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer shadow-zinc-400 hover:shadow-zinc-500'>
      <img src={img} alt={title} className='w-full max-h-48 object-cover rounded-t-lg'/>
      <div className='p-6'>
        <h2 className='text-lg tracking-wide font-medium text-orange-500'>{title}</h2>
        <p className=' text-slate-200 mt-1 lg:text-base'>{text}</p>
        <ul className='mt-2 text-slate-200 leading-loose list-disc lg:text-sm'>
          <li>{text2}</li>
          {showDetails && <ul className='list-disc'><li>{text3}</li>
          <li>{text4}</li>
          <li>{text5}</li>
          <li>{text6}</li></ul>
          }
        </ul>
        {!showDetails ? (<button className='text-orange-500 mt-2' onClick={() => setShowDetails(true)}>View More</button>) :(
          <button className='text-orange-500 mt-2' onClick={() => setShowDetails(false)}>View Less</button>)}
    
        <div className='mt-4 flex gap-x-4'>
          <a href={url}>
            <TbWorldWww className='h-8 w-8 text-slate-200 hover:text-orange-500 duration-300'/>
          </a>
          <a href={gitUrl}>
            <FaGithubSquare className='h-8 w-8 text-orange-500 hover:text-slate-200 duration-300'/>
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectsCard
