
import React from 'react'

const SkillsCard = ({icon, title,text,href}) => {
  return (
    <article>
      <span><a href={href}>{icon}</a></span>
      <h4 className='mt-6 font-bold text-slate-200'>
        {title}
      </h4>
      <p className='mt-2 text-slate-200'>{text}</p>
    </article>
  )
}

export default SkillsCard
