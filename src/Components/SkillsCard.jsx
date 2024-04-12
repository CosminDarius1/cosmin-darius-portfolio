
import React from 'react'

const SkillsCard = ({icon, title,text}) => {
  return (
    <article>
      <span>{icon}</span>
      <h4 className='mt-6 font-bold text-slate-200'>
        {title}
      </h4>
      <p className='mt-2 text-slate-200'>{text}</p>
    </article>
  )
}

export default SkillsCard
