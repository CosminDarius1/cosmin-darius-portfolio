import { skills } from '../data';
import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';
import React from 'react'

const Skills = () => {
  return (
    <section className='py-20 align-element' id="skills">
      <SectionTitle text='tech-stack'/>
      <div className='py-16 grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill}/>
        })}
      </div>
    </section>
  )
}

export default Skills
