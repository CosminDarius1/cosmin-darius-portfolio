import { skills } from '../data';
import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';
import React from 'react'

const Skills = () => {
  return (
    <section className='py-10 md:py-20 align-element' id="skills">
      <SectionTitle text='tech-stack'/>
      <div className='py-6 md:py-16 flex flex-wrap justify-center gap-4'>
        {skills.map((skill, index) => {
          return <div key={skill.id} className='skill-item text base lg:text-base text-sm'>
          <SkillsCard {...skill} />
        </div>
        })}
      </div>
      <style jsx>{`
        .skill-item {
          margin-bottom: 1rem;
          flex-basis: calc(33.333% - 1rem);
          width: calc(33.333% - 1rem); /* Fixed width for larger screens */
        }

        @media (max-width: 768px) {
          .skill-item {
            flex-basis: calc(50% - 1rem);
            width: calc(50% - 1rem); /* Adjusted width for smaller screens */
          }
        }
      `}</style>
    </section>
  )
}

export default Skills
