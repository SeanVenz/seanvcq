import React from 'react'
import { skillsData } from '../constants/constant'

function Skills() {
    return (
        <section className='flex-col flex items-center justify-center gap-8 text-main'>

            <h5 className='text-3xl'>My Skills</h5>
            <div className='max-w-screen-xl w-full flex justify-center items-center flex-row flex-wrap gap-10'>
                {skillsData.map((skill, id) => (
                    <div className='bg-tertiary hover:bg-secondary hover:scale-110 transition-all duration-300 ease-in-out rounded-3xl gap-4 p-20  flex flex-col items-center justify-center'>
                        <div className='w-32 h-auto'>{skill.logo}</div>
                        <span className='text-lg'>{skill.name}</span>
                    </div>
                ))} 
            </div>
        </section>
    )
}

export default Skills